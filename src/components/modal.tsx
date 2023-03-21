import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { useAtom } from "jotai"
import { modalAtom } from "./store/atoms"
import useSubscribe from "@/hooks/useSubscribe"
import Link from "next/link"

const Modal = () => {
  const [modal, setModalAtom] = useAtom(modalAtom)
  const { setEmail, state, subscribe, email } = useSubscribe()

  const handleSubmit = (event: any) => {
    subscribe(event)
    setModalAtom(false)
  }

  const handleChange = (event: any) => {
    setEmail(event.target.value)
    console.log(event.target.value)
  }

  return (
    <Transition show={modal} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => setModalAtom(false)}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-40' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-800/90 p-6 text-left align-middle shadow-xl ring-1 ring-zinc-700 backdrop-blur-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-center text-2xl font-semibold leading-6 text-green-500'
                >
                  Newsletter
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-center text-sm text-gray-500'>
                    Stay up to date with latest news about this product
                  </p>
                </div>
                <div className='mt-4 flex h-12 w-full  gap-2 rounded-md border border-gray-600 px-1'>
                  <input
                    value={email}
                    onChange={(e: any) => handleChange(e)}
                    className='w-full bg-transparent text-sm text-gray-200 outline-none placeholder:text-zinc-600'
                    type='email'
                    placeholder='Enter your email to get beta-test'
                  />
                  {/* <button */}
                  {/*   type='button' */}
                  {/*   className='my-1 w-[150px] rounded-md bg-green-100 px-2 py-3 text-xs font-semibold text-gray-900 transition-all duration-300 hover:bg-green-300 hover:text-gray-800' */}
                  {/*   onClick={(event: any) => handleSubmit(event)} */}
                  {/* > */}
                  {/*   Subscribe */}
                  {/* </button> */}

                  <Link
                    href={`mailto:terrnitllc.work@gmail.com?cc=${email}&subject=Quick%20question&body=Hi%20team%21%0aHow%20are%20you%20doing%3F`}
                    className='my-1 w-[150px] rounded-md bg-green-100 px-2 py-3 text-xs font-semibold text-gray-900 transition-all duration-300 hover:bg-green-300 hover:text-gray-800'
                  >
                    Subscribe
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition >
  )
}

export default Modal
