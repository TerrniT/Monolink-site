import Image from "next/image"
import React from 'react'

type Props = {
  title?: boolean
}

const Logo = ({ title }: Props) => {
  return (
    <div className='flex items-center gap-2'>
      <Image src='/monolink-rev.svg' width={40} height={40} alt='logo' />
      {title && (
        <h1 className=' hidden text-lg font-medium leading-8 text-gray-100 md:block lg:block'>
          Monolink
        </h1>
      )}
    </div>
  )
}

export default Logo
