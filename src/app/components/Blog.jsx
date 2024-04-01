import React from "react"
import Image from "next/image"
import Link from "next/link"

export const ArtigosdoBlog = [
  {
    id: 3,
    src: '/blog3.jpg',
    title: 'Segredos para Armazenar Queijos: Mantenha o Sabor e a Textura intactos!',
    href: '/Blog/armazenar'
  },
  {
    id: 2,
    src: '/blog2.jpg',
    title: 'Deliciosas combinações com queijo: Explore novos sabores e sensações',
    href: '/Blog/combinacoes'
  },
  {
    id: 1,
    src: '/blog1.jpg',
    title: 'Descubra as harmonizações perfeitas: Bebidas que combinam com queijos!',
    href: '/Blog/harmonizacao'
  }
];

const Blog = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 md:p-16 bg-white">
      <h2 className="text-primary font-bold text-4xl mb-8">Blog</h2>

      <div className="mt-10 flex flex-wrap justify-center gap-5 md:px-16">
        {ArtigosdoBlog.map((blog) => (
          <div key={blog.id} className="text-primary flex flex-col justify-center items-center  w-80 bg-primary/20 rounded shadow-lg shadow-black/40 pb-8">
            <Image
              image={blog.src}
              src={blog.src}
              alt={blog.title}
              className="rounded"
              width={800}
              height={600}
            />
            <span className="font-bold text-xl p-2 text-center pb-8">{blog.title}</span>
            <Link
              href={blog.href}
              className="flex justify-center items-center bg-primary text-secondary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-primary hover:bg-secondary transition-all duration-300"
            >
              Ver mais
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog;