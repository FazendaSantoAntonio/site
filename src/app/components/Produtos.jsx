"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { db } from "../../../config/firebase"
import { collection, getDocs } from 'firebase/firestore';
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function calculateAverageRating(ratings) {
    if (!ratings || ratings.length === 0) {
        return 0; // Se não houver avaliações ou se ratings for undefined, a média é 0.
    }

    // const totalRating = ratings.reduce((acc, rating) => acc + rating, 0);
    const averageRating = ratings.length;
    return averageRating;
}

function StarRating({ rating }) {
    const numStars = 5;
    const filledStars = Math.floor(rating);

    const starIcons = [];
    for (let i = 0; i < numStars; i++) {
        if (i < filledStars) {
            starIcons.push(
                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
            );
        } else {
            starIcons.push(
                <FontAwesomeIcon key={i} icon={faStar} className="text-zinc-300" />
            );
        }
    }

    return <div className="flex">{starIcons}</div>;
}

const Card = ({ foto, titulo, preco, precoav, ratings, }) => {
    const averageRating = calculateAverageRating(ratings);
    return (
        <div className="text-primary flex flex-col justify-center items-center w-72 bg-primary/20  shadow-md shadow-black/30">
            <Image src={foto} alt={titulo} height={300} width={300} className="rounded" />
            <div className="mt-5 flex flex-col justify-center items-center">
                <span className="font-bold text-xl text-center">{titulo}</span>
                <StarRating rating={averageRating} />
                <span className="font-bold text-xl text-orange-500">R${preco}</span>
                <span>à vista R$ <span className="text-orange-500 font-bold">{precoav}</span></span>
            </div>
            <div className="flex gap-5 my-5">
                <button className="flex justify-center items-center bg-primary text-secondary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-primary hover:bg-secondary transition-all duration-300">Compre</button>
                <Link href="/detalhes" className="flex justify-center items-center bg-secondary text-primary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-secondary hover:bg-primary transition-all duration-300">Detalhes</Link>
            </div>
        </div>
    )
}

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
                    setProduto(dataList.slice(startIndex, endIndex)); // Filtra os itens da página atual
                }
                getProduto();
            } catch (error) {
                console.error("Erro:", error);
            }
        }

        fetchData();
    }, [currentPage]);


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-5 pb-10'>
            {produto.map((item) => {
                if (Array.isArray(item.imagens) && item.imagens.length > 0) {
                    const primeiroLink = item.imagens[0];
                    return (
                        <Card
                            key={item.id}
                            titulo={item.produto}
                            preco={item.valor}
                            foto={primeiroLink}
                            ratings={item.avaliacao}
                            href="/compra"
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
        <div className="pagination space-x-5 ">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-2 rounded-full mr-2 
           ${currentPage === page ? 'bg-primary text-white' : 'bg-white text-secondary hover:bg-secondary'}
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
    )
}