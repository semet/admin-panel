import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { TProps } from './type'

export const EditorButton: FC<TProps> = (props) => {
  const { icon, className, disabled, active, ...rest } = props
  return (
    <button
      type="button"
      className={twMerge([
        'flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-xl text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0',
        active
          ? 'bg-primary-500 text-white hover:bg-primary-700 hover:text-gray-100'
          : '',
        disabled ? 'cursor-not-allowed bg-gray-200 text-gray-400' : '',
        className
      ])}
      {...rest}
    >
      {icon}
    </button>
  )
}
