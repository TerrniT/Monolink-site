import React from "react"
import Image from "next/image"
import { Tags } from "@/types/types"

const Tag = ({ imageUrl, imageSrc }: Tags) => {
  return (
    <>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={imageSrc}
          width={30}
          height={30}
          className='h-8 w-8 rounded-full'
        />
      ) : (
        <div className='h-8 w-8 rounded-full bg-zinc-600 ring-1 ring-zinc-800'></div>
      )}
    </>
  )
}

export default Tag
