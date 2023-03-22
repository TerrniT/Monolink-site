import { Disclosure } from '@headlessui/react'
import React from 'react'
import PlusIcon from './PlusIcon'


interface Props {
  open: boolean
  question: string
  answer: string
}

const QuestionSection = ({ open, question, answer }: Props) => {
  return (
    <>
      <Disclosure.Button className="flex w-full justify-between transition-all duration-200 border-b-2 border-b-zinc-600  py-3 text-left text-lg font-medium text-white hover:text-gray-300  focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
        <span>{question}</span>
        <PlusIcon
          className={`${open ? 'rotate-45 transition-all duration-200 ease-linear transform' : ''
            } h-5 w-5 text-white hover:text-gray-300 transition-all duration-200 ease-linear`}
        />
      </Disclosure.Button>
      <Disclosure.Panel className=" pt-4 pb-2 text-sm text-gray-500">
        {answer}
      </Disclosure.Panel>
    </>
  )
}

export default QuestionSection
