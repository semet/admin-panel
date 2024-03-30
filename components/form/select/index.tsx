import dynamic from 'next/dynamic'
import { FC, useId } from 'react'
import { Controller, get, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { TProps } from './type'

const ReactSelect = dynamic(() => import('react-select'), {
  ssr: false
})

export const Select: FC<TProps> = (props) => {
  const {
    name,
    rules,
    id,
    label,
    containerClassName,
    labelClassName,
    leftNode,
    leftNodeClassName,
    rightNode,
    rightNodeClassName,
    required,
    isMulti,
    options,
    defaultValue,
    isSearchable = false,
    onChange,
    ...rest
  } = props

  const generatedId = useId()

  const {
    control,
    formState: { errors }
  } = useFormContext()

  const error = get(errors, name)
  return (
    <div className={twMerge(['flex flex-col gap-1', containerClassName])}>
      {label && (
        <label
          htmlFor={id ?? generatedId}
          className={twMerge(['text-sm text-gray-500', labelClassName])}
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
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <ReactSelect
              instanceId={id ?? generatedId}
              id={id ?? generatedId}
              isMulti={isMulti}
              onChange={(newValue) => {
                if (onChange) {
                  onChange(newValue)
                  return
                }

                field.onChange(newValue)
              }}
              isSearchable={isSearchable}
              options={options}
              components={{
                IndicatorSeparator: undefined
              }}
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: 20 }),

                control: (styles, { isDisabled, isFocused }) => ({
                  ...styles,
                  backgroundColor: isDisabled ? '#F1F1F1' : 'white',
                  color: isDisabled ? '#F1F1F1' : '#C1C1C1',
                  borderColor: isFocused ? '#45C1FF' : '#d1d5db',
                  outlineColor: isFocused ? '#45C1FF' : '#d1d5db',
                  boxShadow: 'none',
                  fontSize: '14px'
                }),

                option: (styles) => ({
                  ...styles,
                  fontSize: '14px'
                })
              }}
              value={field.value}
              defaultValue={defaultValue}
              {...rest}
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
