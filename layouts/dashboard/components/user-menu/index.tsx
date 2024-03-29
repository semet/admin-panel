import { DropDown } from '@/components/base'
import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { menus } from './menu'
import Image from 'next/image'

export const UserMenu = () => {
  return (
    <DropDown title={<RenderedImage />}>
      <ul className="flex flex-col px-sm first:mt-2 last:mb-2 ">
        {menus.map((menu) => (
          <li
            className="flex cursor-pointer items-center gap-2 rounded-md px-md py-sm text-sm text-gray-900 hover:bg-brand-100/50 hover:text-white"
            key={menu.label}
          >
            <menu.icon className="text-lg" />
            <span>{menu.label}</span>
          </li>
        ))}
      </ul>
    </DropDown>
  )
}

const RenderedImage = () => {
  return (
    <div className="h-[28px] w-[28px] overflow-hidden rounded-lg border-2 border-gray-300">
      <Image
        src={
          'https://plus.unsplash.com/premium_photo-1680020185326-45491267f8da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        width={40}
        height={40}
        alt="user profile image"
        className="object-cover"
      />
    </div>
  )
}
