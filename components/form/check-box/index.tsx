import { TInputType } from '@/components/type'
import React, { FC, useId } from 'react'
import { FieldValues, get, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

export const CheckBox: FC<
  TInputType<
    Record<string, unknown> extends FieldValues
      ? FieldValues
      : Record<string, unknown>
  >
> = (props) => {
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
    ...rest
  } = props

  const generatedId = useId()

  const {
    register,
    formState: { errors }
  } = useFormContext()
  const error = get(errors, name)
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1">
        <input
          type="checkbox"
          {...register(name, rules)}
          className={twMerge([
            'rounded-sm border border-gray-300 bg-slate-200 ring-0 checked:bg-primary-700 focus:border focus:border-primary-500 focus:bg-primary-100 focus:ring-1 focus:ring-primary-500',
            className
          ])}
        />
        {label && (
          <label
            htmlFor={id ?? generatedId}
            className={twMerge(['text-xs text-gray-500', labelClassName])}
          >
            {label}
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
      </div>
      {error && (
        <p className="text-xs italic text-secondary-500">
          {error?.message?.toString()}
        </p>
      )}
    </div>
  )
}
