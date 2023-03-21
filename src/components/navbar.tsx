import React from "react"
import { modalAtom } from "./store/atoms"
import { useAtom } from "jotai"
import { Logo } from "./atoms"

const Navbar = () => {
  const [modal, setModalAtom] = useAtom(modalAtom)

  return (
    <header className='relative my-6 flex w-full items-center justify-between px-8 '>
      <Logo title />
      <nav className='flex items-center gap-6'>
        <button
          onClick={() => setModalAtom(true)}
          className='z-10 rounded-md bg-zinc-800 px-5 py-3 text-xs font-semibold  text-white transition-all duration-300 hover:bg-green-800'
        >
          Subscribe
        </button>
      </nav>
    </header>
  )
}

export default Navbar
