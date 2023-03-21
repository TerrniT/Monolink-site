import React from "react"

type Props = {
  children: string
}

const Description = ({ children }: Props) => {
  return (
    <p className='text-center text-[13px] font-bold uppercase tracking-widest text-emerald-300'>
      {children}
    </p>
  )
}

export default Description
