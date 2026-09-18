"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ItemCarrinho from "../components/ItemCarrinho";
import ItemCarrinhoMobile from "../components/ItemCarrinhoMobile";

export default function Carrinho() {
  return (
    <div className="bg-light py-16 md:py-20">
      <div className="container-page flex flex-col items-center">
        <span className="eyebrow">Finalize seu pedido</span>
        <h1 className="section-title mt-2 flex items-center gap-3">
          <FontAwesomeIcon icon={faCartShopping} className="text-terracotta" />
          Carrinho
        </h1>
        <p className="mt-2 text-center text-primary/60">
          Prévia do carrinho &mdash; o fechamento do pedido, cálculo de frete
          e pagamento online chegam na próxima etapa do site.
        </p>

        {/* carrinho web */}
        <div className="mt-10 hidden w-full max-w-4xl flex-col md:flex">
          <div className="grid grid-cols-[1fr_11rem_11rem_11rem_5rem] rounded-t-xl border border-cardBorder bg-primary px-0 py-3 text-xs font-semibold uppercase tracking-wide text-cream">
            <h2 className="px-3">Produto</h2>
            <h2 className="flex justify-center">Preço unitário</h2>
            <h2 className="flex justify-center">Quantidade</h2>
            <h2 className="flex justify-center">Subtotal</h2>
            <h2 className="flex justify-center">Excluir</h2>
          </div>

          <ItemCarrinho
            foto="/rota8.jpg"
            titulo="Queijo Maturado"
            sku="000000"
            estoque="Disponível"
            preco="100,00"
            subtotal="100,00"
          />

          <div className="flex items-center justify-between rounded-b-xl border-x border-b border-cardBorder bg-white p-4">
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium text-primary">Calcule o frete:</p>
              <input type="text" placeholder="Digite seu CEP" className="rounded-lg border border-cardBorder px-3 py-2 text-sm outline-none focus:border-gold" />
              <button className="btn-outline px-4 py-2 text-xs">
                Calcular <FontAwesomeIcon icon={faTruckFast} className="ml-1" />
              </button>
            </div>
            <p className="text-primary/70">
              Total: <span className="font-display text-xl text-terracotta">R$ 100,00</span>
            </p>
          </div>

          <button className="btn-primary mt-6 self-end">Finalizar Compra</button>
        </div>

        {/* carrinho mobile */}
        <div className="mt-10 flex w-full flex-col items-center gap-5 md:hidden">
          <ItemCarrinhoMobile
            foto="/rota8.jpg"
            titulo="Queijo Maturado"
            sku="000000"
            estoque="Disponível"
            preco="100,00"
            subtotal="100,00"
          />

          <div className="card-surface flex w-full max-w-xs flex-col gap-3 p-4">
            <p className="text-sm font-medium text-primary">Calcule o frete:</p>
            <div className="flex gap-2">
              <input type="text" placeholder="Digite seu CEP" className="w-full rounded-lg border border-cardBorder px-3 py-2 text-sm outline-none focus:border-gold" />
              <button className="btn-outline whitespace-nowrap px-4 py-2 text-xs">
                Calcular <FontAwesomeIcon icon={faTruckFast} className="ml-1" />
              </button>
            </div>
          </div>

          <p className="text-primary/70">
            Total: <span className="font-display text-xl text-terracotta">R$ 100,00</span>
          </p>

          <button className="btn-primary">Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
}
