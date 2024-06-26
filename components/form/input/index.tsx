import { FC, useId } from 'react'
import { get, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { TProps } from './type'

export const Input: FC<TProps> = (props) => {
  const {
    name,
    rules,
    id,
    label,
    className,
    labelClassName,
    leftNode,
    leftNodeClassName,
    rightNode,
    rightNodeClassName,
    required,
    disabled,
    ...rest
  } = props

  const generatedId = useId()

  const {
    register,
    formState: { errors }
  } = useFormContext()

  const error = get(errors, name)
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id ?? generatedId}
          className={twMerge(['text-sm text-gray-500', labelClassName])}
        >
          {label}{' '}
          {required && (
            <span
              className={twMerge([
                '-ml-1 text-xs',
                labelClassName,
                error ? 'text-secondary-500' : 'text-gray-400'
              ])}
            >
              *
            </span>
          )}
        </label>
      )}
      <div
        className={twMerge([
          'flex items-center overflow-hidden rounded-md border bg-gray-300',
          'focus-within:border focus-within:border-primary-500',
          error ? 'border-secondary-500' : 'border-gray-300'
        ])}
      >
        {leftNode && (
          <div className="flex h-full w-[10%] items-center justify-center text-gray-500">
            {leftNode}
          </div>
        )}
        <input
          {...register(name, rules)}
          id={id ?? generatedId}
          {...rest}
          disabled={disabled}
          className={twMerge([
            'flex-1 border-none text-sm text-gray-700 placeholder-gray-400 ring-0 focus:outline-none focus:ring-0',
            disabled ? 'bg-gray-200 text-gray-500' : '',
            rightNode ? 'rounded-r-none border-r-0' : 'pr-4',
            className
          ])}
        />
        {rightNode && (
          <div className="flex h-full w-[10%] items-center justify-center text-gray-500">
            {rightNode}
          </div>
        )}
      </div>

      {error && (
        <p className="text-xs italic text-secondary-500">
          {error?.message?.toString()}
        </p>
      )}
    </div>
  )
}
