import React from "react"
import { Logo, Paragraph } from "@/components/atoms/index"
import { DevToIcon, Dribble, Github, Telegram } from "./atoms/Icons"
import FooterLink from "./atoms/FooterLink"


const Footer = () => {
  return (
    <div className="flex flex-col relative mx-auto mt-56 mb-44 items-center gap-6">
      <Logo title={false} />
      <div className="flex gap-4">
        <FooterLink href="https://github.com/terrnit" title="Privacy Policy" />
        <FooterLink href="https://github.com/terrnit" title="Terms of Service" />
      </div>
      <div className="flex gap-4">
        <FooterLink href="https://dev.to/terrnit">
          <DevToIcon />
        </FooterLink>
        <FooterLink href="https://github.com/terrnit">
          <Github />
        </FooterLink>
        <FooterLink href="https://t.me/terrnit">
          <Telegram />
        </FooterLink>
        <FooterLink href="https://dribbble.com/terrnit">
          <Dribble />
        </FooterLink>
      </div>
      <Paragraph>
        Created by <FooterLink title="Terrnit" href="https://github.com/terrnit" />
      </Paragraph>
    </div>
  )
}

export default Footer
