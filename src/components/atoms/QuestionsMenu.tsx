import React from 'react'

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
                <QuestionSection
                  question="Can I access my links on multiple devices?"
                  answer="Yes! Our  app is cloud-based, so you can access your links from any device with an internet connection. Simply log in with your account information and you'll be able to pull up your links on your computer, tablet, or phone."
                  open={open}
                />
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <QuestionSection
                  question=" Is my information secure when I use your app?"
                  answer="e take your security very seriously. All of our data is encrypted both during transmission and when it is stored on our servers. Your personal information is never shared with third parties and we continuously monitor our systems for any signs of suspicious activity."
                  open={open}
                />
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <QuestionSection
                  question="Can I share my links with other people?"
                  answer="Absolutely! Our app includes sharing features that make it easy to collaborate with others. You can invite people to view or edit your links by sending them a link or email invitation. You can also choose whether to give them read-only access or allow them to make changes."
                  open={open} />
              </>
            )}
          </Disclosure>
        </Transition>
      </div>
    </div>
  )
}

export default QuestionMenu
