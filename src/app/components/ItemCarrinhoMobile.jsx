"use client"
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


export default function ItemCarrinhoMobile({ foto, sku, estoque, preco, titulo, subtotal }) {

    const [count, setCount] = useState(0)

    return (
        <div className="flex flex-col my-5 w-56">
            <div className="flex justify-center items-center p-5 border-x border-t border-primary">
                <Image src={foto} alt={titulo} width={100} className="mr-5" />
            </div>
            <div className=" flex p-5 border border-primary justify-center items-center">

                <div>
                    <p className="font-bold">{titulo}</p>
                    <p>SKU: {sku}</p>
                    <p>Estoque: {estoque}</p>
                </div>
            </div>

            <div className="flex justify-center items-center p-5 border-x font-bold text-xl border-b border-r border-primary">
                R${preco}
            </div>

            <div className="flex justify-center items-center  border-b border-x border-primary p-5">
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

            <div className="flex justify-center items-center font-bold text-xl border-b border-x border-primary p-5">
                R${subtotal}
            </div>
            <div className="flex justify-center items-center p-5 font-bold text-xl border-b border-x border-primary">
                <button><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>

        </div>
    )
}