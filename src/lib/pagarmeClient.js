// Roda no navegador. Usa a chave PÚBLICA do Pagar.me (segura de expor)
// para transformar os dados do cartão num token, sem que o número do
// cartão passe pelo nosso servidor.

export async function tokenizarCartao({ numero, nome, mes, ano, cvv }) {
  const publicKey = process.env.NEXT_PUBLIC_PAGARME_PUBLIC_KEY;
  if (!publicKey) {
    throw new Error("Pagamento com cartão ainda não está configurado.");
  }

  const anoCompleto = ano.length === 2 ? `20${ano}` : ano;

  const res = await fetch(`https://api.pagar.me/core/v5/tokens?appId=${publicKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "card",
      card: {
        number: numero.replace(/\s/g, ""),
        holder_name: nome,
        exp_month: Number(mes),
        exp_year: Number(anoCompleto),
        cvv,
      },
    }),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const mensagem = data?.message || data?.errors?.[0]?.message || "Não foi possível validar o cartão.";
    throw new Error(mensagem);
  }

  return data.id;
}
