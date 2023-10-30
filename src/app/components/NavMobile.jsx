'use client'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faComments,
    faUser,
    faCartShopping,
    faPeopleGroup,
    faLock,
    faHome,
    faCheese,
} from '@fortawesome/free-solid-svg-icons'
import logo from '../../../public/logo.png'


import { useState } from 'react'
import Image from 'next/image'
export default function NavMobile() {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <div className='bg-secondary  flex justify-around md:hidden mt-10'>
            <div className=' flex justify-around items-center py-1 w-screen'>
                <div className='flex justify-center items-center'>
                    <Image src={logo} alt="logo da Fazenda Santo Antônio"
                        className="rounded-full w-28 py-2"
                    />
                </div>
                <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="flex justify-center items-center cursor-pointer "
                    fill="#4e2828"
                    viewBox="0 0 100 50"
                    width="30"
                    height="30"
                >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="80" height="10"></rect>
                    <rect y="60" width="60" height="10"></rect>
                </svg>
            </div>

            <div
                className={`text-primary fixed  right-0 top-0 z-40 flex h-full w-[70vw]  flex-col bg-secondary transition-all duration-1000 ease-in-out ${showSidebar ? 'translate-x-0 ' : 'translate-x-full'
                    }`}
            >
                <button
                    className="fixed right-10 top-6 z-50 flex cursor-pointer items-center text-4xl text-primary"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
                <Link
                    href="/"
                    className=" text-yellow1 mt-20 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-light"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon icon={faHome} className="h-5 text-vermelho" />
                    <p>Início</p>
                </Link>
                <Link
                    href="??"
                    className=" text-yellow1 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-light"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon icon={faUser} className="h-5 text-vermelho" />
                    <p>Minha Conta</p>
                </Link>
                <Link
                    href="/fale-conosco"
                    className=" text-yellow1 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-light"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon icon={faComments} className="h-5 text-vermelho" />
                    <p>Atendimento</p>
                </Link>
                <Link
                    href="quem-somos"
                    className=" text-yellow1 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-light"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon icon={faCheese} className="h-5 text-vermelho" />
                    <p>Produtos</p>
                </Link>
                <Link
                    href="/carrinho"
                    className=" text-yellow1 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-light"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className="h-5 text-vermelho"
                    />
                    <p>Meu Carrinho</p>
                </Link>
                <Link
                    href="quem-somos"
                    className=" text-yellow1 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-light"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon icon={faPeopleGroup} className="h-5 text-vermelho" />
                    <p>Quem somos</p>
                </Link>
                <Link
                    href="politica-de-privacidade"
                    className=" text-yellow1  flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-light"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon icon={faLock} className="h-5 text-vermelho" />
                    <p>Política de privacidade</p>
                </Link>
                <Link
                    href="politica-de-troca-devolucao"
                    className=" text-yellow1  flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-light"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon icon={faLock} className="h-5 text-vermelho" />
                    <p>Política de Troca e Devolução</p>
                </Link>

                <div className="flex items-center justify-center p-10">
                    <Image src={logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}