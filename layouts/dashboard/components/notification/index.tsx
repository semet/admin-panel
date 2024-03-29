import { BadgeContainer, DropDown } from '@/components/base'
import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { menus } from './menu'

export const Notification = () => {
  return (
    <DropDown title={<RenderedIcon />}>
      <ul className="flex flex-col px-sm first:mt-2 last:mb-2 ">
        {menus.map((menu) => (
          <li
            className="cursor-pointer rounded-md px-md py-sm text-sm text-gray-900 hover:bg-brand-100/50 hover:text-white"
            key={menu.label}
          >
            <span>{menu.label}</span>
          </li>
        ))}
      </ul>
    </DropDown>
  )
}

const RenderedIcon = () => {
  return (
    <BadgeContainer content="3">
      <IoIosNotificationsOutline className="text-3xl text-gray-500 hover:text-gray-700" />
    </BadgeContainer>
  )
}
