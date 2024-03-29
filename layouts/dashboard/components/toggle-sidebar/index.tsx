import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'
import { useLayout } from '@/layouts/dashboard'

export const ToggleSidebar = () => {
  const { expanded, toggleSidebar } = useLayout()
  return (
    <button
      className={twMerge(
        'rou flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:bg-slate-100',
        `${!expanded ? 'rotate-180' : ''}`
      )}
      onClick={toggleSidebar}
    >
      <IoIosArrowBack className="text-xl text-gray-700" />
    </button>
  )
}
