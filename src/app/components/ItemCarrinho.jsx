"use client"
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


export default function ItemCarrinho({ foto, sku, estoque, preco, titulo, subtotal }) {
    const [count, setCount] = useState(0)
    return (
        <div className="flex felx-col">
            <div className="flex flex-row w-72 h-24 border-x border-b border-primary justify-center items-center">
                <div>
                    <Image src={foto} alt={titulo} width={100} className="mr-5" />
                </div>
                <div>
                    <p className="font-bold">{titulo}</p>
                    <p>SKU: {sku}</p>
                    <p>Estoque: {estoque}</p>
                </div>
            </div>
            <div className="flex justify-center items-center font-bold text-xl w-44 border-b border-r border-primary">
                R${preco}
            </div>
            <div className="flex justify-center items-center w-44 border-b border-r border-primary">
                <div className="flex w-28 items-center justify-center gap-5 border border-white ">
                    <button
                        className="text-3xl text-white w-full h-full bg-secondary hover:text-primary hover:bg-white transition-all duration-300"
                        onClick={() => setCount(count - 1)}
                    >
                        -
                    </button>
                    <p className="text-xl text-vermelho">{count}</p>
                    <button
                        className="text-3xl text-white w-full h-full bg-secondary hover:text-primary hover:bg-white transition-all duration-300"
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center font-bold text-xl w-44 border-b border-r border-primary">
                R${subtotal}
            </div>
            <div className="flex justify-center items-center font-bold text-xl w-44 border-b border-r border-primary">
                <button><FontAwesomeIcon icon={faTrashAlt}/></button>
            </div>
        </div>
    )
}

export function ItemCarrinhoMobile({ foto, sku, estoque, preco, titulo, subtotal }) {
    const [count, setCount] = useState(0)
    return (
        <div className="flex">
            <div className="flex flex-row w-72 h-24 border-x border-b border-primary justify-center items-center">
                <div>
                    <Image src={foto} alt={titulo} width={100} className="mr-5" />
                </div>
                <div>
                    <p className="font-bold">{titulo}</p>
                    <p>SKU: {sku}</p>
                    <p>Estoque: {estoque}</p>
                </div>
            </div>
            <div className="flex justify-center items-center font-bold text-xl w-44 border-b border-r border-primary">
                R${preco}
            </div>
            <div className="flex justify-center items-center w-44 border-b border-r border-primary">
                <div className="flex w-28 items-center justify-center gap-5 border border-white ">
                    <button
                        className="text-3xl text-white w-full h-full bg-secondary hover:text-primary hover:bg-white transition-all duration-300"
                        onClick={() => setCount(count - 1)}
                    >
                        -
                    </button>
                    <p className="text-xl text-vermelho">{count}</p>
                    <button
                        className="text-3xl text-white w-full h-full bg-secondary hover:text-primary hover:bg-white transition-all duration-300"
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center font-bold text-xl w-44 border-b border-r border-primary">
                R${subtotal}
            </div>
            <div className="flex justify-center items-center font-bold text-xl w-44 border-b border-r border-primary">
                <button><FontAwesomeIcon icon={faTrashAlt}/></button>
            </div>
        </div>
    )
}