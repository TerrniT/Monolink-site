import React from 'react'
import { PlusIcon } from "@/components/atoms/index"

import { Disclosure, Transition } from '@headlessui/react'
import QuestionSection from './QuestionSection'

const QuestionMenu = () => {
  return (
    <div className="w-full  pt-16">
      <div className="w-full max-w-2xl mx-auto rounded-2xl  p-2">
        <Transition
          show
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure>
            {({ open }) => (
              <>
                <QuestionSection open={open} />
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <QuestionSection open={open} />
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <QuestionSection open={open} />
              </>
            )}
          </Disclosure>
        </Transition>
      </div>
    </div>
  )
}

export default QuestionMenu
