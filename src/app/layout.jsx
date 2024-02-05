import Footer from './components/Footer'
import NavBar from './components/NavBar'
import '../app/styles/globals.css'
import { Lobster, Montserrat,} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })
const lobster = Lobster({ subsets: ['latin'], weight: '400', variable: '--font-lob' })

export const metadata = {
  title: 'Queijo Fazenda Santo Antônio',
  description: 'Queijos Premiados na França',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.variable} ${lobster.variable}  min-h-screen bg-light`}>
     <NavBar/>
     {children}
     <Footer/>
     </body>
    </html>
  )
}
