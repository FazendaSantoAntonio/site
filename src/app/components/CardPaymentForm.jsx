"use client";
import { useState } from "react";
import { tokenizarCartao } from "../../lib/pagarmeClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const formatarNumero = (v) => v.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
const formatarValidade = (v) => v.replace(/\D/g, "").slice(0, 4).replace(/(\d{2})(?=\d)/, "$1/");

export default function CardPaymentForm({ onToken, processando }) {
  const [numero, setNumero] = useState("");
  const [nome, setNome] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");
  const [tokenizando, setTokenizando] = useState(false);
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");

    const [mes, ano] = validade.split("/");
    if (!mes || !ano || mes.length !== 2 || ano.length !== 2) {
      setErro("Validade inválida. Use o formato MM/AA.");
      return;
    }
    if (numero.replace(/\s/g, "").length < 13) {
      setErro("Número do cartão inválido.");
      return;
    }
    if (cvv.length < 3) {
      setErro("CVV inválido.");
      return;
    }

    setTokenizando(true);
    try {
      const token = await tokenizarCartao({ numero, nome, mes, ano, cvv });
      onToken(token);
    } catch (e) {
      setErro(e.message);
    } finally {
      setTokenizando(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col gap-3">
      <input
        required
        value={numero}
        onChange={(e) => setNumero(formatarNumero(e.target.value))}
        placeholder="Número do cartão"
        inputMode="numeric"
        className="rounded-lg border border-cardBorder bg-white px-4 py-2.5 outline-none focus:border-gold"
      />
      <input
        required
        value={nome}
        onChange={(e) => setNome(e.target.value.toUpperCase())}
        placeholder="Nome impresso no cartão"
        className="rounded-lg border border-cardBorder bg-white px-4 py-2.5 outline-none focus:border-gold"
      />
      <div className="flex gap-3">
        <input
          required
          value={validade}
          onChange={(e) => setValidade(formatarValidade(e.target.value))}
          placeholder="MM/AA"
          inputMode="numeric"
          className="w-1/2 rounded-lg border border-cardBorder bg-white px-4 py-2.5 outline-none focus:border-gold"
        />
        <input
          required
          value={cvv}
          onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
          placeholder="CVV"
          inputMode="numeric"
          className="w-1/2 rounded-lg border border-cardBorder bg-white px-4 py-2.5 outline-none focus:border-gold"
        />
      </div>

      {erro && (
        <p className="flex items-center gap-2 text-sm text-terracotta">
          <FontAwesomeIcon icon={faTriangleExclamation} />
          {erro}
        </p>
      )}

      <button type="submit" disabled={tokenizando || processando} className="btn-primary justify-center disabled:opacity-60">
        <FontAwesomeIcon icon={faCreditCard} />
        {tokenizando ? "Validando cartão..." : processando ? "Processando pagamento..." : "Pagar com cartão"}
      </button>
      <p className="text-center text-[11px] text-primary/40">Pagamento único, sem parcelamento por enquanto.</p>
    </form>
  );
}
