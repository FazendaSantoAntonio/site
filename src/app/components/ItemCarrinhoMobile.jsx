"use client";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ItemCarrinhoMobile({ foto, sku, estoque, preco, titulo, subtotal }) {
  const [count, setCount] = useState(1);

  return (
    <div className="card-surface flex w-full max-w-xs flex-col gap-3 p-4 text-primary">
      <div className="flex items-center gap-4">
        <Image src={foto} alt={titulo} width={64} height={64} className="rounded-lg object-cover" />
        <div>
          <p className="font-display text-base text-primary">{titulo}</p>
          <p className="text-xs text-primary/50">SKU: {sku}</p>
          <p className="text-xs text-primary/50">{estoque}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-terracotta">R$ {preco}</span>
        <div className="flex items-center gap-3 rounded-full border border-cardBorder px-3 py-1">
          <button aria-label="Diminuir quantidade" className="text-primary/60" onClick={() => setCount(Math.max(1, count - 1))}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="w-4 text-center">{count}</span>
          <button aria-label="Aumentar quantidade" className="text-primary/60" onClick={() => setCount(count + 1)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-cardBorder pt-3">
        <span className="text-sm text-primary/60">Subtotal: <span className="font-semibold text-terracotta">R$ {subtotal}</span></span>
        <button aria-label="Remover item" className="text-primary/50 hover:text-terracotta">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
}
