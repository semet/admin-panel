import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

export type TInputType<TFormValues extends Record<string, unknown>> =
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: Path<TFormValues>
    rules?: RegisterOptions<TFormValues>
    label?: string
    labelClassName?: string
    containerClassName?: string
    leftNode?: ReactNode
    leftNodeClassName?: string
    rightNode?: ReactNode
    rightNodeClassName?: string
  }
