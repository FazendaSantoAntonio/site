"use client";
import CarrosselDetalhes from "./components/CarrosselDetalhes";
import Produtos from "./components/Produtos";
import RotaDoQueijo from "./components/RotadoQueijo";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <div>
      <CarrosselDetalhes />
      <Produtos />
      {/* <RotaDoQueijo /> */}
      <Blog />
    </div >
  )
}
