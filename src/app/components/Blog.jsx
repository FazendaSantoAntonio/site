import Image from "next/image"


const Card = ({ foto, titulo, texto }) => {
    return (
        <div className="text-primary flex flex-col justify-center items-center  w-80 bg-primary/20 rounded shadow-lg shadow-black/40">
            {/* <Image src={foto} alt={titulo} className="rounded" /> */}
            <div className="mt-5 flex flex-col justify-center items-center">
                <span className="font-bold text-xl">{titulo}</span>
                <span className="p-2 text-primary/75">{texto} ...</span>
            </div>
            <div className="flex gap-5 my-5">
                <button className="flex justify-center items-center bg-primary text-secondary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-primary hover:bg-secondary transition-all duration-300">Ler Mais</button>

            </div>
        </div>
    )
}

export default function Blog() {
    return (
        <div className="flex flex-col justify-center items-center py-16 md:p-16 bg-white">
            <h2 className="text-primary font-bold text-4xl">
                Blog
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-5 md:px-16">
                <Card
                    // foto={img}
                    titulo="Lorem"
                    texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cumque dolor excepturi itaque reprehenderit nulla obcaecati praesentium facilis animi! Iure eaque natus placeat reiciendis laborum eius, dolorem corporis suscipit voluptates"
                />
                <Card
                    // foto={img}
                    titulo="Lorem"
                    texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cumque dolor excepturi itaque reprehenderit nulla obcaecati praesentium facilis animi! Iure eaque natus placeat reiciendis laborum eius, dolorem corporis suscipit voluptates"
                />
                <Card
                    // foto={img}
                    titulo="Lorem"
                    texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cumque dolor excepturi itaque reprehenderit nulla obcaecati praesentium facilis animi! Iure eaque natus placeat reiciendis laborum eius, dolorem corporis suscipit voluptates"
                />

            </div>
        </div>
    )
}