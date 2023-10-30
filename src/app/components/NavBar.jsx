import Image from "next/image";
import logo from "../../../public/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faHome, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import NavMobile from "./NavMobile";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const CustonLink = ({ title, icon, link }) => {
    return (
        <Link href={link} className="flex w-36 text-primary flex-col justify-center items-center hover:text-light transition-all duration-300">
            <FontAwesomeIcon icon={icon} className="h-5" />
            {title}
        </Link>
    )
}

export default function NavBar() {
    return (
        <div>
            <div className="fixed flex justify-center md:justify-between items-center px-5 bg-light w-screen z-10 backdrop-blur-md top-0">
                <div className="space-x-5 p-2 divide-primary/75 divide-x flex">
                    <Link href="https://www.instagram.com/queijofazendasantoantonio/"
                        target="_blank" className="text-black/75 hover:text-primary transition-all duration-300 flex justify-center items-center">
                        <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                        Instagram
                    </Link>
                    <Link href="https://www.facebook.com/queijofazendasantoantonio"
                        target="_blank" className="flex justify-center items-center text-black/75 hover:text-primary transition-all duration-300 pl-5">
                        <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                        Facebook
                    </Link>
                </div>
                <div>
                    <Link href="https://wa.me/+553598647172" 
                    target="_blank"
                    className="flex justify-center items-center hover:text-primary transition-all duration-300 text-black/75 ml-5">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-xl mr-2" />
                        <p className="hidden md:block">+55 35 9864-7172</p>
                    </Link>
                </div>
            </div>

            <NavMobile />

            <nav className="hidden md:flex w-screen bg-secondary justify-center items-end h-28 mt-10">

                <CustonLink
                    link="/"
                    title="Início"
                    icon={faHome}
                />
                <CustonLink
                    link="/quem-somos"
                    title="Quem Somos"
                    icon={faUser}
                />
                <Link href="/">
                    <Image src={logo} width={100} alt="logo da Fazenda Santo Antônio"
                        className="rounded-full hidden md:block "
                    />
                </Link>
                <CustonLink
                    link='/carrinho'
                    title='Carrinho'
                    icon={faShoppingCart}
                />
                <CustonLink
                    link='/fale-conosco'
                    title='Atendimento'
                    icon={faComments}
                />
            </nav>
            <nav className="hidden md:flex flex-wrap w-screen px-16  justify-center items-center bg-primary text-secondary py-2">
                <Link href="#" className="hover:text-light transition-all duration-300 px-5">
                    Queijos
                </Link>
                <Link href="#" className="hover:text-light transition-all duration-300 px-5">
                    Doces
                </Link>
                
            </nav>

        </div>
    )
}