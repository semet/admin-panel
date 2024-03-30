import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, get, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { TProps } from './type'

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((module) => module),
  { ssr: false }
)

export const MDXEditor: FC<TProps> = (props) => {
  const { className, name, containerClassName } = props
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const error = get(errors, name)
  return (
    <div className={twMerge(['flex flex-col gap-1', className])}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <MDEditor
              value={field.value}
              onChange={field.onChange}
              className={className}
              preview="edit"
              {...props}
            />
          )
        }}
      />
      {error && (
        <p className="text-xs italic text-secondary-500">
          {error?.message?.toString()}
        </p>
      )}
    </div>
  )
}
