import React, { FC, HTMLInputTypeAttribute } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { TProps } from './type'

export const RevealPassword: FC<TProps> = (props) => {
  const { onClick, inputType } = props
  return (
    <button
      type="button"
      className="h-full"
      onClick={onClick}
    >
      {inputType === 'password' ? <IoMdEye /> : <IoMdEyeOff />}
    </button>
  )
}
