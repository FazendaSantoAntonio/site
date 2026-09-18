import { createClient } from "@supabase/supabase-js";
import { criarPedidoPagamento } from "../../../../lib/pagarme";

function supabaseParaUsuario(accessToken) {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { global: { headers: { Authorization: `Bearer ${accessToken}` } } }
  );
}

function extrairDadosExibicao(pagarmeOrder) {
  const charge = pagarmeOrder.charges?.[0];
  const transacao = charge?.last_transaction;
  if (!transacao) return null;

  if (transacao.qr_code) {
    return { tipo: "pix", qrCode: transacao.qr_code, qrCodeUrl: transacao.qr_code_url, expiraEm: transacao.expires_at };
  }
  if (transacao.line || transacao.barcode) {
    return { tipo: "boleto", url: transacao.url, linhaDigitavel: transacao.line, codigoBarras: transacao.barcode, vencimento: transacao.due_at };
  }
  return { tipo: "credit_card", status: transacao.status, mensagem: transacao.acquirer_message };
}

function statusPagamento(pagarmeOrder) {
  const status = pagarmeOrder.status;
  if (status === "paid") return "pago";
  if (status === "failed" || status === "canceled") return "falhou";
  return "pendente";
}

export async function POST(request) {
  try {
    const authHeader = request.headers.get("authorization");
    const accessToken = authHeader?.replace("Bearer ", "");
    if (!accessToken) {
      return Response.json({ error: "Não autenticado." }, { status: 401 });
    }

    const { orderId, paymentMethod, cardToken, cpf } = await request.json();
    if (!orderId || !paymentMethod) {
      return Response.json({ error: "orderId e paymentMethod são obrigatórios." }, { status: 400 });
    }

    const supabase = supabaseParaUsuario(accessToken);

    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData?.user) {
      return Response.json({ error: "Sessão inválida." }, { status: 401 });
    }

    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("*, order_items(*), profiles(full_name, phone, cpf)")
      .eq("id", orderId)
      .single();

    if (orderError || !order) {
      return Response.json({ error: "Pedido não encontrado." }, { status: 404 });
    }

    const documentoCpf = cpf || order.profiles?.cpf;
    if (!documentoCpf) {
      return Response.json({ error: "CPF é obrigatório para pagamento." }, { status: 400 });
    }

    if (!order.profiles?.cpf) {
      await supabase.from("profiles").update({ cpf: documentoCpf }).eq("id", userData.user.id);
    }

    const pagarmeOrder = await criarPedidoPagamento({
      order,
      orderItems: order.order_items,
      comprador: {
        nome: order.profiles?.full_name || userData.user.email,
        email: userData.user.email,
        cpf: documentoCpf,
        telefone: order.profiles?.phone,
      },
      paymentMethod,
      cardToken,
    });

    const novoStatusPagamento = statusPagamento(pagarmeOrder);
    const dadosExibicao = extrairDadosExibicao(pagarmeOrder);

    await supabase
      .from("orders")
      .update({
        payment_id: pagarmeOrder.id,
        payment_method: paymentMethod,
        payment_status: novoStatusPagamento,
        payment_details: dadosExibicao,
        status: novoStatusPagamento === "pago" ? "pago" : order.status,
      })
      .eq("id", orderId);

    return Response.json({ pagamento: dadosExibicao, status: novoStatusPagamento });
  } catch (error) {
    console.error("Erro ao criar pagamento:", error);
    return Response.json({ error: error.message || "Erro ao processar pagamento." }, { status: 500 });
  }
}
