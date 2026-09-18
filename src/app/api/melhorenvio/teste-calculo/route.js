// Rota temporária, só para validar a conexão com o Melhor Envio.
// Remover depois que confirmarmos que está funcionando.
import { calcularFrete } from "../../../../lib/melhorenvio";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const resultado = await calcularFrete({
      cepDestino: "01310100",
      produtos: [{ id: "teste", width: 15, height: 10, length: 20, weight: 1, insurance_value: 65, quantity: 1 }],
    });
    return Response.json(resultado);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
