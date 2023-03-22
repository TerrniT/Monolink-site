import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { AppProps } from "next/app"
import Modal from "@/components/modal"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "400", "500", "600", "700", "800", "900"],
})


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={inter.className}>
      <Modal />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
