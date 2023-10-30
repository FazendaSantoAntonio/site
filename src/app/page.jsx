"use client";
import Image from "next/image";
import queijobg from "../../public/queijobg.jpg"
import Destaques from "./components/Destaques";
import Promocao from "./components/Promocao";
import Produtos from "./components/Produtos";
import Blog from "./components/Blog";
import Modal from "./components/Modal";

export default function Home() {
  return (
    <div>
      <div className="flex py-10 xl:py-0 pl-5 xl:pl-44 items-center relative"  >
        <div className="xl:h-[800px] flex flex-col justify-center w-44 xl:w-[700px]">
          <h1 className="text-white font-black xl:text-7xl text-2xl md:pt-10 uppercase drop-shadow-dark0 ">
          Queijos
            <span className="text-secondary text-4xl xl:text-8xl"> Artesanais </span>
          </h1>
          <h1 className="text-white font-black xl:text-7xl text-2xl uppercase drop-shadow-dark0">
            de Alagoa.
          </h1>
          <p className="hidden md:block text-primary/95 text-xl font-bold ml-5 md:mt-5 py-2 border-l border-primary pl-3 w-44 md:w-72">
            Leve para Casa o Verdadeiro Sabor das Montanhas!
          </p>
          <button className="hidden md:flex mt-10 justify-center items-center bg-primary text-secondary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-primary hover:bg-secondary transition-all duration-300 mb-5 w-44">
            Compre
          </button>
        </div>
        <div>
          <Image src={queijobg} alt="queijo" className="object-cover left-0 top-0 absolute -z-10 opacity-90 h-full" />
        </div>
      </div>
      {/* <Destaques />
      <Promocao /> */}
      <Produtos />
      <Blog />
      <Modal />
    </div >
  )
}
