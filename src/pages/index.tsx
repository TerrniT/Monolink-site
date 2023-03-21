import { type NextPage } from "next"
import { Navbar, Hero, Features, Questions, Footer } from "@/components"
import Header from "@/components/header"

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className='hero z-10 bg-black px-2 backdrop-blur-lg md:px-3 lg:px-0'>
        <div className='mx-auto flex  min-h-screen max-w-6xl flex-col bg-transparent'>
          <Navbar />
          <Hero />
          <Features />
          <Questions />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Home
