import { BadgeContainer, DropDown } from '@/components/base'
import React from 'react'
import { IoMdMail } from 'react-icons/io'
import { messages } from './data'
import Link from 'next/link'

export const Message = () => {
  return (
    <DropDown title={<RenderedIcon />}>
      <ul className="flex flex-col px-sm first:mt-2 last:mb-2 ">
        {messages.map((message) => (
          <li
            className="flex cursor-pointer flex-col rounded-md px-md py-sm text-sm text-gray-500 hover:bg-brand-100/50 hover:text-gray-700"
            key={message.id}
          >
            <span>{message.name}</span>
            <span className="text-xs text-gray-400">{message.message}</span>
          </li>
        ))}
        <li className="px-md py-sm text-sm">
          <Link
            href={'#'}
            className="text-gray-700  hover:text-brand-500"
          >
            View all
          </Link>
        </li>
      </ul>
    </DropDown>
  )
}

const RenderedIcon = () => {
  return (
    <BadgeContainer content="10">
      <IoMdMail className="text-3xl text-gray-500 hover:text-gray-700" />
    </BadgeContainer>
  )
}
