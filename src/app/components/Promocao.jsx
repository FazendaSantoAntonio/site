import Image from "next/image"
import Link from "next/link"

const Card = ({ foto, titulo, preco, precoav }) => {
    return (
        <div className="text-primary flex flex-col justify-center items-center  w-64 bg-primary/20 rounded shadow-lg shadow-black/40">
            <Image src={foto} alt={titulo} className="rounded" />
            <div className="mt-5 flex flex-col justify-center items-center">
                <span className="font-bold text-xl">{titulo}</span>
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

export default function Promocao() {
    return (
        <div className="flex flex-col justify-center items-center py-16 md:p-16 bg-white">
            <h2 className="text-primary font-bold text-4xl">Promocão</h2>
            <div className="mt-10 flex flex-wrap justify-center gap-12 md:gap-5 md:px-16">
                <Card
                    // foto={img}
                    titulo="Queijo"
                    preco="100,00"
                    precoav="90,00"
                />
            </div>
        </div>
    )
}