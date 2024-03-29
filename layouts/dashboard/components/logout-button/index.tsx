import React from 'react'
import { IoMdLogOut } from 'react-icons/io'

export const LogoutButton = () => {
  return (
    <button>
      <IoMdLogOut className="text-2xl text-gray-500 hover:text-gray-700" />
    </button>
  )
}
