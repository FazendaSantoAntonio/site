"use client"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import ItemCarrinho from "../components/ItemCarrinho";
import ItemCarrinhoMobile from "../components/ItemCarrinhoMobile";

export default function Carrinho() {

    return (
        <div>
            {/*carrinho web */}
            <div className="hidden mx-16 my-16 md:flex flex-col justify-center items-center ">
                <p><span className="font-bold text-xl text-primary">Carrinho</span> Clique em finalizar compra para efetuar o seu pedido.</p>
                <div className="shadow-sm shadow-primary flex bg-primary/20 border border-primary text-primary">
                    <h2 className="uppercase font-bold border-r border-primary w-72 p-2">
                        Produto
                    </h2>
                    <h2 className="uppercase font-bold border-r border-primary p-2 w-44 flex justify-center items-center">
                        Preço unitário
                    </h2>
                    <h2 className="uppercase font-bold border-r border-primary p-2 w-44 flex justify-center items-center">
                        Quantidade
                    </h2>
                    <h2 className="uppercase font-bold border-r border-primary p-2 w-44 flex justify-center items-center">
                        Subtotal
                    </h2>
                    <h2 className="uppercase font-bold p-2 w-44 flex justify-center items-center">
                        Excluir
                    </h2>
                </div>
                <div>
                    <ItemCarrinho
                        // foto={queijo}
                        titulo="Queijo"
                        sku="000000"
                        estoque="Disponivel"
                        preco="100,00"
                        subtotal="100,00"
                    />
                    
                </div>
                <div className="flex justify-end items-end w-[992px] border-x border-b border-primary bg-primary/20 p-2">
                    <p>Subtotal: <span className="font-bold">90,00</span> </p>
                </div>
                <div className="flex  items-center p-5 bg-primary/20 w-[992px] border-x border-b border-primary">
                    <p className="font-bold mr-2">Calcule o Frete:</p>
                    <input type="text" className="p-2" placeholder="digite o seu CEP" />
                    <button className="flex justify-center items-center bg-primary text-secondary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-primary hover:bg-secondary transition-all duration-300">Calcular <FontAwesomeIcon icon={faTruckFast} className="ml-2" /></button>
                </div>
                <div className="w-[992px] flex justify-end items-end border-x border-b border-primary p-2">
                    <p>Total: <span className="font-bold text-2xl">R$90,00</span> </p>
                </div>

                <button className=" text-2xl mt-5 flex justify-center items-center bg-primary text-secondary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-primary hover:bg-secondary transition-all duration-300">Finalizar Compra</button>
            </div>

            {/*carrinho mobile */}
            <div>
                <div className="flex flex-col justify-center items-center md:hidden px-5 pt-10">
                <span className="font-bold  text-primary">Carrinho</span>
                <p className="text-sm w-44 text-primary/75"> Clique em finalizar compra para efetuar o seu pedido.</p>
                    <ItemCarrinhoMobile
                        // foto={queijo}
                        titulo="Queijo"
                        sku="000000"
                        estoque="Disponivel"
                        preco="100,00"
                        subtotal="100,00"
                    />
                   
                </div>
                <div className="flex flex-col gap-5 items-center p-5 bg-primary/20 ">
                    <p className="font-bold mr-2">Calcule o Frete:</p>
                    <div className="flex">
                        <input type="text" className="p-2 w-44" placeholder="digite o seu CEP" />
                        <button className="w-24 flex justify-center items-center bg-primary text-secondary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-primary hover:bg-secondary transition-all duration-300 text-sm">Calcular <FontAwesomeIcon icon={faTruckFast} className="ml-2" />
                        </button>
                    </div>
                </div>
                <div className=" flex justify-end items-end border-x border border-primary p-2">
                    <p>Total: <span className="font-bold text-2xl">R$90,00</span> </p>
                </div>
                <div className="py-5 flex items-center justify-center">
                    <button className=" mt-5 flex justify-center items-center bg-primary text-secondary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-primary hover:bg-secondary transition-all duration-300">Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
}