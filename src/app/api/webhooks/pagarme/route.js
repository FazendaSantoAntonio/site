import { createClient } from "@supabase/supabase-js";
import { buscarPedidoPagamento } from "../../../../lib/pagarme";

// Usa a service_role key: esse endpoint é chamado pelo Pagar.me, sem
// sessão de usuário, então precisa de uma permissão maior para
// atualizar o pedido de qualquer cliente.
function supabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}

function statusPagamento(status) {
  if (status === "paid") return "pago";
  if (status === "failed" || status === "canceled") return "falhou";
  return "pendente";
}

export async function POST(request) {
  const payload = await request.json().catch(() => null);
  if (!payload) {
    return Response.json({ error: "Payload inválido." }, { status: 400 });
  }

  // Nunca confiamos direto no corpo do webhook: buscamos a situação real
  // do pedido de volta na API do Pagar.me, usando nossa chave secreta.
  // Isso evita agir sobre uma chamada forjada por terceiros.
  const pagarmeOrderId = payload.data?.id?.startsWith("or_")
    ? payload.data.id
    : payload.data?.order?.id;

  if (!pagarmeOrderId) {
    return Response.json({ ok: true, ignorado: "evento sem order id" });
  }

  try {
    const pagarmeOrder = await buscarPedidoPagamento(pagarmeOrderId);
    const nossoOrderId = pagarmeOrder.metadata?.order_id;
    if (!nossoOrderId) {
      return Response.json({ ok: true, ignorado: "sem metadata.order_id" });
    }

    const novoStatusPagamento = statusPagamento(pagarmeOrder.status);
    const supabase = supabaseAdmin();

    await supabase
      .from("orders")
      .update({
        payment_status: novoStatusPagamento,
        status: novoStatusPagamento === "pago" ? "pago" : undefined,
      })
      .eq("id", nossoOrderId);

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Erro ao processar webhook do Pagar.me:", error);
    return Response.json({ error: "Erro ao processar webhook." }, { status: 500 });
  }
}
