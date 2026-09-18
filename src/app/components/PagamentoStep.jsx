"use client";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "../../../config/supabase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode, faBarcode, faCreditCard, faCopy, faCheck,
  faArrowRotateRight, faCircleCheck, faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const formatBRL = (v) => Number(v).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function CopiarBotao({ texto }) {
  const [copiado, setCopiado] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(texto);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 1500);
      }}
      className="flex items-center gap-1.5 text-xs font-semibold text-terracotta"
    >
      <FontAwesomeIcon icon={copiado ? faCheck : faCopy} />
      {copiado ? "Copiado" : "Copiar"}
    </button>
  );
}

export default function PagamentoStep({ order, profileCpf }) {
  const [metodo, setMetodo] = useState(null);
  const [cpf, setCpf] = useState("");
  const [processando, setProcessando] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");
  const [statusAtual, setStatusAtual] = useState(order.status);
  const [verificando, setVerificando] = useState(false);

  const mensagemWhats = encodeURIComponent(
    `Olá! Fiz o pedido #${order.id.slice(0, 8)} no site (total ${formatBRL(order.total)}) e preciso de ajuda com o pagamento.`
  );

  const escolherMetodo = async (novoMetodo) => {
    setErro("");
    if (!profileCpf && cpf.replace(/\D/g, "").length !== 11) {
      setErro("Informe um CPF válido para continuar.");
      return;
    }

    setMetodo(novoMetodo);
    setProcessando(true);

    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData?.session?.access_token;

    try {
      const res = await fetch("/api/pagamentos/criar", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
        body: JSON.stringify({ orderId: order.id, paymentMethod: novoMetodo, cpf }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao gerar pagamento.");
      setResultado(data.pagamento);
      setStatusAtual(data.status === "pago" ? "pago" : "pendente");
    } catch (e) {
      setErro(e.message);
      setMetodo(null);
    } finally {
      setProcessando(false);
    }
  };

  const verificarPagamento = async () => {
    setVerificando(true);
    const { data } = await supabase.from("orders").select("status, payment_status").eq("id", order.id).single();
    if (data) setStatusAtual(data.status);
    setVerificando(false);
  };

  if (statusAtual === "pago") {
    return (
      <div className="flex flex-col items-center gap-3 text-center">
        <FontAwesomeIcon icon={faCircleCheck} className="text-4xl text-olive" />
        <h2 className="font-display text-2xl text-primary">Pagamento confirmado!</h2>
        <p className="max-w-sm text-primary/70">
          Recebemos seu pagamento. Vamos preparar seu pedido com carinho.
        </p>
        <Link href="/conta" className="btn-primary">Ver meus pedidos</Link>
      </div>
    );
  }

  if (resultado?.tipo === "pix") {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-display text-2xl text-primary">Pague com Pix</h2>
        <p className="text-primary/70">Escaneie o QR Code ou copie o código abaixo no app do seu banco.</p>
        {resultado.qrCodeUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={resultado.qrCodeUrl} alt="QR Code Pix" className="h-56 w-56 rounded-xl border border-cardBorder" />
        )}
        <div className="flex w-full max-w-md items-center justify-between gap-3 rounded-lg border border-cardBorder bg-cream px-4 py-3">
          <span className="truncate text-xs text-primary/70">{resultado.qrCode}</span>
          <CopiarBotao texto={resultado.qrCode} />
        </div>
        <button onClick={verificarPagamento} disabled={verificando} className="btn-outline text-sm">
          <FontAwesomeIcon icon={faArrowRotateRight} className={verificando ? "animate-spin" : ""} />
          {verificando ? "Verificando..." : "Já paguei, verificar"}
        </button>
      </div>
    );
  }

  if (resultado?.tipo === "boleto") {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-display text-2xl text-primary">Boleto gerado</h2>
        <p className="text-primary/70">
          Vencimento em {new Date(resultado.vencimento).toLocaleDateString("pt-BR")}. Após o pagamento, pode levar até 3 dias úteis para confirmar.
        </p>
        <Link href={resultado.url} target="_blank" className="btn-primary">Ver / imprimir boleto</Link>
        <div className="flex w-full max-w-md items-center justify-between gap-3 rounded-lg border border-cardBorder bg-cream px-4 py-3">
          <span className="truncate text-xs text-primary/70">{resultado.linhaDigitavel}</span>
          <CopiarBotao texto={resultado.linhaDigitavel} />
        </div>
        <button onClick={verificarPagamento} disabled={verificando} className="btn-outline text-sm">
          <FontAwesomeIcon icon={faArrowRotateRight} className={verificando ? "animate-spin" : ""} />
          {verificando ? "Verificando..." : "Já paguei, verificar"}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <h2 className="font-display text-2xl text-primary">Pedido #{order.id.slice(0, 8)} registrado!</h2>
      <p className="max-w-sm text-primary/70">Escolha como prefere pagar:</p>

      {!profileCpf && (
        <input
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="Seu CPF (só números)"
          maxLength={14}
          className="w-full max-w-xs rounded-lg border border-cardBorder bg-white px-4 py-2.5 text-center outline-none focus:border-gold"
        />
      )}

      <div className="flex flex-wrap justify-center gap-3">
        <button onClick={() => escolherMetodo("pix")} disabled={processando} className="btn-primary disabled:opacity-60">
          <FontAwesomeIcon icon={faQrcode} />
          {processando && metodo === "pix" ? "Gerando..." : "Pagar com Pix"}
        </button>
        <button onClick={() => escolherMetodo("boleto")} disabled={processando} className="btn-outline disabled:opacity-60">
          <FontAwesomeIcon icon={faBarcode} />
          {processando && metodo === "boleto" ? "Gerando..." : "Boleto"}
        </button>
        <button disabled className="btn-outline opacity-50" title="Em breve">
          <FontAwesomeIcon icon={faCreditCard} />
          Cartão (em breve)
        </button>
      </div>

      {erro && (
        <p className="flex items-center gap-2 text-sm text-terracotta">
          <FontAwesomeIcon icon={faTriangleExclamation} />
          {erro}
        </p>
      )}

      <p className="text-xs text-primary/50">
        Prefere combinar direto?{" "}
        <Link href={`https://wa.me/5535998647172?text=${mensagemWhats}`} target="_blank" className="font-semibold text-terracotta">
          Fale no WhatsApp
        </Link>
      </p>
    </div>
  );
}
