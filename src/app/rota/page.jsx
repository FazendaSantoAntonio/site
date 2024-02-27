import Image from 'next/image';
import Link from 'next/link';

export default function Rota() {
  return (
    <main>
      <h2 className="text-primary font-bold text-4xl align-center text-center p-16">Rota do Queijo e do Azeite</h2>

      <div className="flex flex-col md:flex-row">
        <div className="flex-wrap p-8">
          Imagina poder conhecer o Plantio das Oliveiras, ou até a fabricação do famoso Queijo de Alagoa? <br /><br />
          O <span className="font-bold">Queijo Fazenda Santo Antônio</span> vai proporcionar essa rica experiência para você! <br /><br />
          Conheça hoje mesmo a <span className="font-bold">ROTA DO QUEIJO E DO AZEITE</span>, um passeio que vai permitir com que você conheça Alagoa, a mais alta das Terras Altas da Mantiqueira, visite a fazenda de oliveiras, onde é produzido o Melhor Azeite do Hemisfério Sul, e ainda a produção de Queijos Premiados no Brasil e no Mundo! <br /><br />
          Em nossa Rota, você vai ter a oportunidade de respirar um bom ar puro da montanha, conhecer a paz e tranquilidade de Alagoa, visitar uma cachoeira, enfim, ter um dia espetacular conosco! <br /><br />
          Garantimos uma experiência inesquecível! <br /><br />
          Nesse passeio, você vai conhecer: <br />
          - Visita à Fazenda X, para conhecer o plantio das oliveiras; <br />
          - Almoço no Restaurante x, para apreciar a comida Mineira; <br />
          - Visita à Cachoeira do Facão, para fazer fotos espetaculares; <br />
          - Visita à Queijo Fazenda Santo Antônio, para conhecer nossa produção de queijos. <br /><br />
          Para reservar sua vaga, ou obter mais informações: <br />
          <Link href="https://wa.me/5535998647172" className="font-bold text-xl">Clique aqui e fale conosco pelo WhatsApp</Link>
          <br /><br />
        </div>
        <div className="flex-wrap p-8">
          <Image src="/rota1.jpg" width="948" height="711" alt="Conheça Alagoa" className="rounded-3xl" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 md:px-16 mb-10">
        <h2 className="text-primary font-bold text-4xl align-center text-center p-8">Veja abaixo algumas fotos do local.</h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex-wrap p-8">
            <Image src="/rota2.jpg" width="948" height="711" alt="Conheça Alagoa" className="rounded-3xl" />
          </div>
          <div className="flex-wrap p-8">
            <Image src="/rota3.jpg" width="948" height="711" alt="Conheça Alagoa" className="rounded-3xl" />
          </div>
          <div className="flex-wrap p-8">
            <Image src="/rota4.jpg" width="948" height="711" alt="Conheça Alagoa" className="rounded-3xl" />
          </div>
          <div className="flex-wrap p-8">
            <Image src="/rota5.jpg" width="948" height="711" alt="Conheça Alagoa" className="rounded-3xl" />
          </div>
          <div className="flex-wrap p-8">
            <Image src="/rota6.jpg" width="948" height="711" alt="Conheça Alagoa" className="rounded-3xl" />
          </div>
        </div>
      </div>

    </main>
  )
}