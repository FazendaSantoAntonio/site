import Image from 'next/image'

export default function Rota() {
  return (
    <main>
      <h2 className="text-primary font-bold text-4xl align-center text-center pt-16 px-6">Rota do Queijo e do Azeite</h2>
      <h3 className="pb-16 font-bold text-2xl align-center text-center px-6">Uma experiência incrível, que vai te levar à sabores e sensações espetaculares!</h3>

      <div className="flex flex-col text-center md:text-left md:flex-row md:px-28">
        <div className="flex-wrap md:p-12 bg-white md:w-1/2">
          <p className='text-xl pb-12 md:pr-8 pt-12 px-6'>Imagina poder conhecer uma cidade cercada por muita natureza, paz, tranquilidade, cachoeiras incríveis, o <span className="font-bold text-primary">Plantio das Oliveiras</span>, ou até a fabricação do <span className="font-bold text-primary">famoso e premiado Queijo de Alagoa?</span></p>
          <p className='text-xl pb-12 md:pr-8 px-6'>O <span className="font-bold text-primary">Queijo Fazenda Santo Antônio</span> vai proporcionar essa rica experiência para você, com nossa <span className="font-bold text-primary">Rota do Queijo e do Azeite!</span></p>
        </div>
        <div className="flex-wrap p-18 bg-[#FFEFCA] md:-ml-16 md:mt-4 -mt-6 m-4 md:w-1/2">
          <Image src="/rota1.jpg" width="948" height="711" alt="Conheça Alagoa" className='p-6' />
        </div>
      </div>

      <div className="flex flex-col text-center md:text-left md:flex-row md:px-28">
        <div className="flex-wrap p-18 bg-[#FFEFCA] md:-mr-16 md:mt-4 -mt-6 m-4 z-10 md:w-1/2">
          <Image src="/rota8.jpg" width="948" height="711" alt="Conheça Alagoa" className='p-6' />
        </div>
        <div className="flex-wrap md:p-12 bg-white md:w-1/2">
          <p className='text-xl pb-12 md:pl-8 pt-12 px-6'>Conheça hoje mesmo a <span className="font-bold text-primary">ROTA DO QUEIJO E DO AZEITE</span>, um passeio que vai permitir com que você e toda sua família conheça a belíssima Alagoa, a mais alta das Terras Altas da Mantiqueira. Você vai visitar também a <span className="font-bold text-primary">Fazenda Cauré</span>, onde é produzido o Melhor Azeite do Hemisfério Sul, e ainda vai conhecer a produção de Queijos Premiados em vários concursos no Brasil e no Mundo, na <span className="font-bold text-primary">Fazenda Santo Antônio.</span></p>
        </div>
      </div>

      <div className="flex flex-col text-center md:text-left md:flex-row md:px-28">
        <div className="flex-wrap md:p-12 bg-white md:w-1/2">
          <p className='text-xl pb-12 md:pr-8 pt-12 px-6'>Em nossa <span className="font-bold text-primary">Rota do Queijo e do Azeite</span>, você vai ter a oportunidade de respirar um bom ar puro da montanha, conhecer a paz, a tranquilidade e as belezas da pacata cidade de Alagoa, visitar uma cachoeira, que vai te proporcionar um bom cenário para lindas fotos, enfim, ter um dia espetacular com a descoberta de muitos <span className="font-bold text-primary">sabores e sensações!</span></p>
        </div>
        <div className="flex-wrap p-18 bg-[#FFEFCA] md:-ml-16 md:mt-4 -mt-6 m-4 z-10 md:w-1/2">
          <Image src="/rota2.jpg" width="948" height="711" alt="Conheça Alagoa" className='p-6' />
        </div>
      </div>

      <div className="flex flex-col text-center md:text-left md:flex-row md:px-28">
        <div className="flex-wrap p-18 bg-[#FFEFCA] md:-mr-16 md:mt-4 -mt-6 m-4 z-10 md:w-1/2">
          <Image src="/rota5.jpg" width="948" height="711" alt="Conheça Alagoa" className='p-6' />
        </div>
        <div className="flex-wrap md:p-12 bg-white md:w-1/2 align-center p-6">
          <p className='text-xl md:pl-8 align-center'>
            <span className="font-bold text-primary">Nesse passeio, você vai conhecer:</span>
          </p>
          <ul>
            <li className='text-xl md:pl-8'>- Visita à Fazenda Cauré, para conhecer o plantio das oliveiras;</li>
            <li className='text-xl md:pl-8'>- Almoço em Restaurante local, para apreciar a comida Mineira;</li>
            <li className='text-xl md:pl-8'>- Visita à Cachoeira do Facão, para fazer fotos espetaculares;</li>
            <li className='text-xl md:pl-8'>- Visita à Queijo Fazenda Santo Antônio, para conhecer nossa produção de queijos.</li>
          </ul>
          <p className='text-xl pt-6 md:pl-8'>
            Tudo isso, por <span className="font-bold text-primary">apenas R$ 200,00 por pessoa!</span> Aproveite!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:px-28 text-center">
        <div className="flex-wrap p-12 bg-white md:w-1/2 justify-center">
          <p className='text-xl md:pb-12'>Aproveite e faça hoje mesmo sua reserva para a <span className="font-bold text-primary">Rota do Queijo e do Azeite!</span> Escolha a forma de pagamento preferida:</p>
        </div>
        <div className="flex-wrap md:p-12 bg-white md:w-1/3">
          <p className='text-xl pb-12'>
            <Link href="https://payment-link.pagar.me/pl_AaWwRN56yZXKRgBSOU351Y7Jxoe8m0BL" target="_blank" className="font-bold text-xl bg-[#592F2F] text-white border px-8 py-4 rounded-full">Comprar Agora! (1 pessoa)</Link>
          </p>
        </div>
        <div className="flex-wrap md:p-12 bg-white md:w-1/3">
          <p className='text-xl pb-12'>
            <Link href="https://payment-link.pagar.me/pl_7zoMwQmPg2jrZXC2ecBYE86W3bxVX90D" target="_blank" className="font-bold text-xl bg-[#592F2F] text-white border px-8 py-4 rounded-full">Comprar Agora! (2 pessoas)</Link>
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-4 gap-4 md:px-28 bg-[#FFEFCA] py-8 px-4">
        <div>
          <Image src="/rota2.jpg" width="948" height="711" alt="Conheça Alagoa" />
        </div>
        <div>
          <Image src="/rota3.jpg" width="948" height="711" alt="Conheça Alagoa" />
        </div>
        <div>
          <Image src="/rota4.jpg" width="948" height="711" alt="Conheça Alagoa" />
        </div>
        <div>
          <Image src="/rota5.jpg" width="948" height="711" alt="Conheça Alagoa" />
        </div>
        <div>
          <Image src="/rota6.jpg" width="948" height="711" alt="Conheça Alagoa" />
        </div>
        <div>
          <Image src="/rota10.jpg" width="948" height="711" alt="Conheça Alagoa" />
        </div>
        <div>
          <Image src="/rota15.jpg" width="948" height="711" alt="Conheça Alagoa" />
        </div>
        <div>
          <Image src="/rota13.jpg" width="948" height="711" alt="Conheça Alagoa" />
        </div>
        <div>
          <Image src="/rota7.jpg" width="948" height="711" alt="Conheça Alagoa" />
        </div>
        <div>
          <Image src="/rota11.jpg" width="948" height="711" alt="Conheça Alagoa" />
        </div>
        <div>
          <Image src="/rota12.jpg" width="948" height="711" alt="Conheça Alagoa" />
        </div>
        <div>
          <Image src="/rota9.jpg" width="948" height="711" alt="Conheça Alagoa" />
        </div>
        <div>
          <Image src="/rota14.jpg" width="948" height="711" alt="Conheça Alagoa" />
        </div>
        <div>
          <Image src="/rota17.jpg" width="948" height="711" alt="Conheça Alagoa" />
        </div>
        <div>
          <Image src="/rota16.jpg" width="948" height="711" alt="Conheça Alagoa" />
        </div>
        
      </div>

    </main>
  )
}