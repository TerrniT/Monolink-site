import { Description, Heading, Paragraph } from "@/components/atoms"
import Link from "next/link"
import QuestionMenu from "./atoms/QuestionsMenu"

const Questions = () => {
  return (
    <div className='mt-44 flex flex-col items-center '>
      <Description>FAQ</Description>
      <Heading>Got Questions?</Heading>
      <Paragraph>
        If you have any other questions - please get in touch at <Link href="mailto:terrnitllc.work@gmail.com" className="text-white hover:text-green-300 duration-150 transition-all pl-1">terrnitllc.work@gmail.com</Link>
      </Paragraph>
      <QuestionMenu />
    </div>
  )
}

export default Questions
