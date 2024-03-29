import React, { FC } from 'react'
import { TProps } from './type'

export const BadgeContainer: FC<TProps> = (props) => {
  const { content, children } = props
  return (
    <div className="relative">
      <div className="absolute -right-1 -top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-500 shadow-sm">
        <span className="text-xs font-thin text-white">{content}</span>
      </div>
      {children}
    </div>
  )
}
