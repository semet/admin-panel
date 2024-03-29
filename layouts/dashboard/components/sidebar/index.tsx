import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { IoIosArrowBack } from 'react-icons/io'
import { SidebarContent, useLayout } from '@/layouts/dashboard'

export const Sidebar = () => {
  const { expanded } = useLayout()

  return (
    <aside
      className={twMerge(
        'bg-slate-900 transition-all duration-300 ease-in-out',
        `${expanded ? 'w-[300px]' : 'w-[130px]'}`
      )}
    >
      {/* Top */}
      <div className="sticky left-0 top-0 z-50 bg-slate-900">
        <div className="relative flex h-16 items-center justify-center shadow-md">
          <span className="text-4xl font-semibold tracking-wide text-gray-100">
            {expanded ? 'LOGO' : 'L'}
          </span>
        </div>
      </div>
      {/* Menus */}
      <SidebarContent />
    </aside>
  )
}
