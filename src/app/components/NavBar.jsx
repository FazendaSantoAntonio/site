import Image from "next/image";
import logo from "../../../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faHome,
  faShoppingCart,
  faUser,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import NavMobile from "./NavMobile";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const CustonLink = ({ title, icon, link }) => {
  return (
    <Link
      href={link}
      className="flex w-36 text-primary flex-col justify-center items-center hover:text-[#000] transition-all duration-300"
    >
      <FontAwesomeIcon icon={icon} className="h-5" />
      {title}
    </Link>
  );
};

export default function NavBar() {
  return (
    <div>
      <div className="fixed flex justify-center md:justify-between items-center px-5 bg-[#FFDE99] w-screen z-10 backdrop-blur-md top-0 z-20">
        <div className="p-3 flex">
          <p className="justify-center items-center text-sm text-[#4A241D]">
            <FontAwesomeIcon icon={faWarning} className="mr-2" /> Frete grátis
            para compras acima de R$ 1.000,00. Atendemos também ao varejo,
            consulte-nos!
          </p>
        </div>
        <div className="p-3 flex">
          <Link
            href="https://www.instagram.com/queijofazendasantoantonio/"
            target="_blank"
            className="text-[#4A241D] hover:text-[#000000] transition-all duration-300 flex justify-center items-center font-bold"
          >
            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
          </Link>
          <Link
            href="https://www.facebook.com/queijofazendasantoantonio"
            target="_blank"
            className="flex justify-center items-center text-[#4A241D] hover:text-[#000000] transition-all duration-300 pl-3"
          >
            <FontAwesomeIcon icon={faFacebook} className="mr-2" />
          </Link>
          <Link
            href="https://wa.me/+553598647172"
            target="_blank"
            className="flex justify-center items-center transition-all duration-300 text-[#4A241D] hover:text-[#000000] pl-3"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-xl mr-2" />
          </Link>
        </div>
      </div>

      <NavMobile />

      <nav className="hidden md:flex w-screen bg-[#FFEFCA] justify-center items-center h-28 mt-10">
        <CustonLink link="/" title="Início" icon={faHome} />

        <CustonLink link="/quem-somos" title="Quem Somos" icon={faUser} />
        <Link href="/">
          <Image
            src={logo}
            width={100}
            alt="Queijo Fazenda Santo Antônio"
            className="rounded-full hidden md:block "
          />
        </Link>

        <CustonLink link="/" title="Carrinho" icon={faShoppingCart} />

        <CustonLink
          link="/fale-conosco"
          title="Atendimento"
          icon={faComments}
        />
      </nav>
      
    </div>
  );
}
