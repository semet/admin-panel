import { ChangeEvent, FC, useId } from 'react'
import { Controller, get, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { TProps } from './type'

export const FileInput: FC<TProps> = (props) => {
  const { name, rules, id, label, className, required, disabled, ...rest } =
    props

  const generatedId = useId()

  const {
    control,
    formState: { errors }
  } = useFormContext()

  const error = get(errors, name)

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
  }
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id ?? generatedId}
          className="text-sm text-gray-500"
        >
          {label}{' '}
          {required && (
            <span
              className={twMerge([
                '-ml-1 text-xs',

                error ? 'text-secondary-500' : 'text-gray-400'
              ])}
            >
              *
            </span>
          )}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            {...rest}
            id={id ?? generatedId}
            type="file"
            className={twMerge(['w-full', className])}
            disabled={disabled}
            onChange={(e) => handleUpload(e)}
          />
        )}
      />

      {error && (
        <p className="text-xs italic text-secondary-500">
          {error?.message?.toString()}
        </p>
      )}
    </div>
  )
}
