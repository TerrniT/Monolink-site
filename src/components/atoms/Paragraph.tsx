import React from "react"

type Props = {
  children: string | React.ReactNode | React.ReactChild
}

const Paragraph = ({ children }: Props) => {
  return <h3 className=' flex flex-col lg:flex-row items-center mt-4 text-center max-w-2xl text-base text-zinc-500'>{children}</h3>
}

export default Paragraph
