import { Tags } from "@/types/types"
import React from "react"
import Tag from "./Tag"

type Props = {
  tags?: Tags[]
  downloads: string | number
}

const TagsGroup = ({ tags, downloads }: Props) => {
  return (
    <div className='mt-8 flex -space-x-3 '>
      {tags &&
        tags.map((tag, index) => (
          <Tag key={index} imageUrl={tag.imageUrl} imageSrc={tag.imageSrc} />
        ))}
      <div className='flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-200   align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-300  dark:border-gray-800 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white  dark:focus:text-green-600 '>
        <span className='block text-[12px] font-medium leading-none'>{downloads}</span>
      </div>
    </div>
  )
}

export default TagsGroup
