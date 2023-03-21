import Link from 'next/link'
import React from 'react'

type Props = {
  title?: string
  href: string
  children?: JSX.Element
}

const FooterLink = ({ title, href, children }: Props) => {
  return (
    <Link href={href} className="text-white hover:text-green-300 duration-150 transition-all pl-1">
      <>
        {title}
        {children}
      </>

    </Link>
  )
}

export default FooterLink
