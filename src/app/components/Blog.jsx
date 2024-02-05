import Image from "next/image";

const Card = ({ foto, titulo }) => {
  return (
    <div className="text-primary flex flex-col justify-center items-center  w-80 bg-primary/20 rounded shadow-lg shadow-black/40">
      <Image
        src={foto}
        alt={titulo}
        className="rounded"
        width={800}
        height={600}
      />
      <div className="mt-5 flex flex-col justify-center items-center">
        <span className="font-bold text-xl p-2 text-center">{titulo}</span>
      </div>
      <div className="flex gap-5 my-5">
        <button className="flex justify-center items-center bg-primary text-secondary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-primary hover:bg-secondary transition-all duration-300">
          Ler Mais
        </button>
      </div>
    </div>
  );
};

export default function Blog() {
  return (
    <div className="flex flex-col justify-center items-center py-16 md:p-16 bg-white">
      <h2 className="text-primary font-bold text-4xl">Blog</h2>
      <div className="mt-10 flex flex-wrap justify-center gap-5 md:px-16">
        <Card
          foto={"/blog1.jpg"}
          titulo="Descubra as Harmonizações Perfeitas: Bebidas que Combinam com Queijos!"
        />
        <Card
          foto={"/blog2.jpg"}
          titulo="Deliciosas Combinações com Queijo: Explore Novos Sabores e Sensações!"
        />
        <Card
          foto={"/blog3.jpg"}
          titulo="Segredos para Armazenar Queijos: Mantenha o Sabor e a Textura Intactos!"
        />
      </div>
    </div>
  );
}
