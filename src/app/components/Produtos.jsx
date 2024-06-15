"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Card = ({ foto, titulo, shortdescription, preco, linkpagamento }) => {
  const precoAtual = preco;
  const numberFormatted = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // const numberFormatted = precoAtual.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
  return (
    <div className="text-primary flex flex-col justify-center items-center w-72 bg-primary/20  shadow-md shadow-black/30">
      <Image
        src={foto}
        alt={titulo}
        height={300}
        width={300}
        className="rounded"
      />
      <div className="mt-5 flex flex-col justify-center items-center">
        <span className="font-bold text-xl text-center mb-2">{titulo}</span>
        <span className="text-center mb-2">{shortdescription}</span>
        <span className="font-bold text-xl text-orange-500 mt-4 mb-2">
          {numberFormatted}
        </span>
      </div>
      <div className="flex gap-5 my-5">
        <Link
          href={linkpagamento}
          className="flex justify-center items-center bg-primary text-secondary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-primary hover:bg-secondary transition-all duration-300"
        >
          Comprar
        </Link>
        {/* <Link href="/" className="flex justify-center items-center bg-secondary text-primary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-secondary hover:bg-primary transition-all duration-300">Detalhes</Link> */}
      </div>
    </div>
  );
};

function DatabaseRead({ currentPage, itemsPerPage }) {
  const [produto, setProduto] = useState([]);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    async function fetchData() {
      try {
        async function getProduto() {
          const dataCollection = collection(db, "produtos");
          const dataSnapshot = await getDocs(dataCollection);
          const dataList = dataSnapshot.docs.map((doc) => doc.data());
          setProduto(dataList.slice(startIndex, endIndex));
        }
        getProduto();
      } catch (error) {
        console.error("Erro:", error);
      }
    }

    fetchData();
  }, [currentPage]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-5 pb-10">
      {produto.map((item) => {
        if (Array.isArray(item.imagens) && item.imagens.length > 0) {
          const primeiroLink = item.imagens[0];
          return (
            <Card
              key={item.id}
              titulo={item.produto}
              shortdescription={item.shortdescription}
              preco={item.valor}
              foto={primeiroLink}
              ratings={item.avaliacao}
              linkpagamento={item.linkpagamento}
            />
          );
        }
      })}
    </div>
  );
}
const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const pages = [...Array(totalPages).keys()].map((page) => page + 1);

  return (
    <div className="pagination space-x-5">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-2 rounded-full mr-2 
           ${
             currentPage === page
               ? "bg-primary text-white"
               : "bg-white text-secondary hover:bg-secondary"
           }
         `}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default function Produtos() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchTotalItems() {
      try {
        const dataCollection = collection(db, "produtos");
        const dataSnapshot = await getDocs(dataCollection);
        const totalItems = dataSnapshot.docs.length;
        const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);
        setTotalPages(calculatedTotalPages);
      } catch (error) {
        console.error("Erro ao obter total de itens:", error);
      }
    }
    fetchTotalItems();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center py-16 md:p-16">
      <h2 className="text-primary font-bold text-4xl">Produtos</h2>
      <div className="mt-10 flex flex-wrap justify-center items-center">
        <DatabaseRead currentPage={currentPage} itemsPerPage={itemsPerPage} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
