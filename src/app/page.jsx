"use client";
import CarrosselDetalhes from "./components/CarrosselDetalhes";
import Produtos from "./components/Produtos";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <div>
      <CarrosselDetalhes />
      <Produtos />
      <Blog />
    </div >
  )
}
