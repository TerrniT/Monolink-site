import React from "react"

type Props = {
  children: string
}

const Heading = ({ children }: Props) => {
  return (
    <h2 className='mt-6 max-w-3xl text-center text-3xl font-bold leading-8 text-gray-300 md:text-3xl md:leading-[3.4rem] lg:text-[40px] lg:leading-[3.4rem]'>

      {children}
    </h2>
  )
}

export default Heading
