"use client";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ItemCarrinho({ foto, sku, estoque, preco, titulo, subtotal }) {
  const [count, setCount] = useState(1);

  return (
    <div className="grid grid-cols-[1fr_11rem_11rem_11rem_5rem] items-center border-x border-b border-cardBorder bg-white text-primary">
      <div className="flex items-center gap-4 p-3">
        <Image src={foto} alt={titulo} width={64} height={64} className="rounded-lg object-cover" />
        <div>
          <p className="font-display text-base text-primary">{titulo}</p>
          <p className="text-xs text-primary/50">SKU: {sku}</p>
          <p className="text-xs text-primary/50">{estoque}</p>
        </div>
      </div>
      <div className="flex justify-center font-semibold text-terracotta">R$ {preco}</div>
      <div className="flex justify-center">
        <div className="flex items-center gap-4 rounded-full border border-cardBorder px-3 py-1.5">
          <button
            aria-label="Diminuir quantidade"
            className="text-primary/60 transition-colors duration-300 hover:text-terracotta"
            onClick={() => setCount(Math.max(1, count - 1))}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="w-4 text-center">{count}</span>
          <button
            aria-label="Aumentar quantidade"
            className="text-primary/60 transition-colors duration-300 hover:text-terracotta"
            onClick={() => setCount(count + 1)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <div className="flex justify-center font-semibold text-terracotta">R$ {subtotal}</div>
      <div className="flex justify-center">
        <button aria-label="Remover item" className="text-primary/50 transition-colors duration-300 hover:text-terracotta">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
}
