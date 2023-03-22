import Image from "next/image"
import TagsGroup from "./atoms/TagsGroup"
import { Tags } from "../types/types"
import { useAtom } from "jotai"
import { modalAtom } from "./store/atoms"
import { useState } from "react"
import Paragraph from "./atoms/Paragraph"



const Hero = () => {
  //mock  users
  const [modal, setModalAtom] = useAtom(modalAtom)
  const [users, setUsers] = useState<string[] | undefined>()

  const data: Tags[] = [
    { imageSrc: "user 1", imageUrl: "" },
    { imageSrc: "user 2", imageUrl: "" },
    { imageSrc: "user 3", imageUrl: "" },
  ]

  return (
    <div className=' relative mx-auto  mt-24 flex flex-col items-center'>
      <h1 className=' max-w-3xl text-center text-3xl font-semibold leading-8 text-gray-300 md:text-6xl md:leading-[3.4rem]  lg:text-6xl lg:leading-[3.4rem]'>
        <p className='bg-gradient-to-r from-green-600  via-green-400 to-yellow-200 bg-clip-text py-4 text-center font-bold  text-transparent'>
          Organize your web
        </p>
        experience with Monolink
      </h1>
      <Paragraph>
        With the ability to store and access all your important links in one location, you&apos;ll never
        have to worry about losing or forgetting a valuable webpage again
      </Paragraph>

      <button
        onClick={() => setModalAtom(true)}
        className='mt-9 w-[200px] rounded-md bg-green-100 px-2 py-3 text-xs font-semibold text-gray-900 transition-all duration-300 hover:bg-green-300 hover:text-gray-800'
      >
        Start using now
      </button>

      {users ? (
        <>
          <TagsGroup tags={data} downloads={"45+"} />
          <p className='mt-4 text-xs font-bold uppercase text-emerald-600'>
            Already used by 100+ designers!
          </p>
        </>
      ) : (
        <>
          <TagsGroup tags={data} downloads={"0+"} />
          <p className='mt-4 text-xs font-bold uppercase text-emerald-600'>
            Became a first your user!
          </p>
        </>
      )}

      <div className='relative mt-32 flex w-full '>
        <div className='group relative w-full'>
          <div className='absolute inset-1  max-w-xs w-3/5 mx-auto md:w-full lg:w-full lg:max-w-lg md:max-w-sm rounded-full bg-gradient-radial-at-b from-green-500 via-green-300 to-green-100 scale-150 lg:opacity-40 md:opacity-50 blur-[400px] transition-all duration-500 '></div>
          <Image
            src='/monolink_mock.png'
            width={1024}
            height={677}
            alt='mock_monolink'
            className='relative  w-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero


