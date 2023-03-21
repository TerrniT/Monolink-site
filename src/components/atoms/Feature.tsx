import React from "react"
import Image from "next/image"

type Props = {
  image: string
  title: string
  description: string
}

const Feature = ({ image, title, description }: Props) => {
  return (
    <div className='flex max-w-[286px] flex-col items-center gap-3 text-center text-white'>
      <Image src={image} alt='icon' width={45} height={45} className="w-12 h-12 " />
      <h4 className='text-lg mt-4 font-semibold'>{title}</h4>
      <p className='text-[12px] font-medium text-gray-400'>{description}</p>
    </div>
  )
}

export default Feature
