import Image from "next/image";
import logo from "../../../public/logo.png";
import rixxer from "../../../public/rixxer.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const data = new Date();
  const ano = data.getFullYear();

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <div className="bg-primary p-16 md:p-2 md:py-5 flex flex-col md:flex-row justify-center gap-16 w-screen text-secondary md:space-y-5">
        <div className="flex flex-col justify-center align-center items-center">
          <Image
            src={logo}
            alt="Queijo Fazenda Santo Antônio"
            className="w-48"
          />
        
        </div>
        <div className="flex flex-col text-center align-center">
          <h2 className="uppercase font-bold">Institucional</h2>
          <Link
            href="fale-conosco"
            className="hover:text-light transition-all duration-300 pt-8"
          >
            Fale Conosco
          </Link>
          <Link
            href="/politica-de-privacidade"
            className="hover:text-light transition-all duration-300"
          >
            Política de Privacidade
          </Link>
          <Link
            href="politica-de-troca-e-devolucao"
            className="hover:text-light transition-all duration-300"
          >
            Políticas de Troca e Devolução
          </Link>
          <Link
            href="quem-somos"
            className="hover:text-light transition-all duration-300"
          >
            Quem Somos
          </Link>
        </div>

        <div className="flex flex-col text-center align-center">
          <h2 className="w-72 text-center mb-5">
          Praca Manoel Mendes Carvalho, 114, Alagoa - MG, 37458-000, Brasil
          </h2>
          <Link
              href="https://www.instagram.com/queijofazendasantoantonio/"
              target="_blank"
              className="flex justify-center align-center items-center hover:text-light transition-all duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} />&nbsp;
              Siga-nos no Instagram
            </Link>
            <Link
              href="https://www.facebook.com/queijofazendasantoantonio"
              target="_blank"
              className="flex justify-center align-center items-center hover:text-light transition-all duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} />&nbsp;
              Curta nossa página no Facebook
            </Link>
          <Link
            href="https://wa.me/+553598647172"
            target="_blank"
            className="flex justify-center align-center items-center hover:text-light transition-all duration-300"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl h-4 mr-2 " />
            +55 (35) 99864-7172
          </Link>
        </div>
      </div>
      <div className="pt-5 pb-5 text-primary flex flex-col items-center justify-center text-center bg-setext-secondary w-screen">
        <p className="text-xs ">
          Queijo Fazenda Santo Antônio - Todos os Direitos
          Reservados, {ano}
        </p>
        <div className="flex">
          <p className="text-sm">Desenvolvido por</p>{" "}
          <a
            href="https://rixxer.com.br"
            target="_blank"
            className="font-bold text-secondary hover:text-light transition ease-in-out duration-300 flex justify-center items-center"
          >
            <Image
              src={rixxer}
              alt="Rixxer Copr"
              className="w-12 mx-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
