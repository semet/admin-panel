import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { TProps } from './type'

export const Button: FC<TProps> = (props) => {
  const {
    type,
    className,
    variant = 'primary',
    size = 'md',
    title,
    icon,
    ...rest
  } = props
  return (
    <button
      type={type}
      className={twMerge([
        'flex items-center justify-center rounded-md  px-4 py-2 transition duration-300 ease-in-out',
        'hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:hover:shadow-none',
        variant === 'primary' &&
          'bg-primary-500 text-white hover:bg-primary-700 disabled:bg-primary-300',
        variant === 'outline-primary' &&
          'border border-primary-500 text-primary-500 hover:border-transparent hover:bg-primary-100 hover:text-white disabled:border-primary-300 disabled:bg-inherit disabled:text-primary-300',
        variant === 'secondary' &&
          'bg-secondary-500 text-white hover:bg-secondary-700 disabled:bg-secondary-300',
        variant === 'outline-secondary' &&
          'border border-secondary-500 text-secondary-500 hover:border-transparent hover:bg-secondary-100 hover:text-white disabled:border-secondary-300 disabled:bg-inherit disabled:text-secondary-300',

        variant === 'dark' &&
          'bg-gray-700 text-slate-200 hover:bg-gray-900 hover:text-white disabled:bg-gray-500 disabled:text-gray-200',
        variant === 'outline-dark' &&
          'border border-gray-700 text-gray-700 hover:border-transparent hover:bg-gray-700 hover:text-white disabled:border-gray-500 disabled:bg-inherit disabled:text-gray-500',
        size === 'sm' && 'text-sm',
        size === 'md' && 'text-base',
        size === 'lg' && 'text-lg',

        className
      ])}
      {...rest}
    >
      {icon && icon}
      {title}
    </button>
  )
}
