// Cliente do Pagar.me — SÓ pode ser importado em código de servidor
// (API routes). A chave secreta nunca deve chegar ao navegador.

const PAGARME_API_URL = "https://api.pagar.me/core/v5";

function authHeader() {
  const secretKey = process.env.PAGARME_SECRET_KEY;
  if (!secretKey) {
    throw new Error("PAGARME_SECRET_KEY não configurada no servidor.");
  }
  const token = Buffer.from(`${secretKey}:`).toString("base64");
  return `Basic ${token}`;
}

async function pagarmeRequest(path, options = {}) {
  const res = await fetch(`${PAGARME_API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader(),
      ...options.headers,
    },
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message = data?.message || data?.errors?.[0]?.message || `Erro ${res.status} na API do Pagar.me`;
    const error = new Error(message);
    error.status = res.status;
    error.details = data;
    throw error;
  }

  return data;
}

const onlyDigits = (value) => (value || "").replace(/\D/g, "");

function buildCustomer({ nome, email, cpf, telefone }) {
  const telefoneDigits = onlyDigits(telefone);
  return {
    name: nome,
    email,
    type: "individual",
    document: onlyDigits(cpf),
    document_type: "CPF",
    phones: telefoneDigits
      ? {
          mobile_phone: {
            country_code: "55",
            area_code: telefoneDigits.slice(0, 2),
            number: telefoneDigits.slice(2),
          },
        }
      : undefined,
  };
}

function buildItems(orderItems) {
  return orderItems.map((item) => ({
    amount: Math.round(Number(item.preco_unitario) * 100),
    description: item.titulo.slice(0, 64),
    quantity: item.quantidade,
  }));
}

/**
 * Cria um pedido no Pagar.me com a forma de pagamento escolhida.
 * paymentMethod: 'pix' | 'boleto' | 'credit_card'
 * cardToken: obrigatório apenas para credit_card (gerado no navegador com a chave pública)
 */
export async function criarPedidoPagamento({ order, orderItems, comprador, paymentMethod, cardToken, installments }) {
  const payment = { payment_method: paymentMethod };

  if (paymentMethod === "pix") {
    payment.pix = { expires_in: 3600 };
  } else if (paymentMethod === "boleto") {
    payment.boleto = {
      instructions: "Pagamento referente ao pedido na Fazenda Santo Antônio.",
      due_at: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    };
  } else if (paymentMethod === "credit_card") {
    if (!cardToken) throw new Error("cardToken é obrigatório para pagamento com cartão.");
    payment.credit_card = {
      card_token: cardToken,
      installments: Math.min(Math.max(Number(installments) || 1, 1), 12),
      statement_descriptor: "FAZENDASTOANTONIO",
    };
  } else {
    throw new Error(`Forma de pagamento inválida: ${paymentMethod}`);
  }

  const body = {
    items: buildItems(orderItems),
    customer: buildCustomer(comprador),
    payments: [payment],
    metadata: { order_id: order.id },
  };

  return pagarmeRequest("/orders", { method: "POST", body: JSON.stringify(body) });
}

export async function buscarPedidoPagamento(pagarmeOrderId) {
  return pagarmeRequest(`/orders/${pagarmeOrderId}`);
}
