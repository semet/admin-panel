import { MDEditorProps } from '@uiw/react-md-editor'
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import { Path, RegisterOptions } from 'react-hook-form'
import { Props as ReactSelectProps } from 'react-select'

export type TInputType<TFormValues extends Record<string, unknown>> =
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
    TBaseInputType<TFormValues>
export type TFileInputType<TFormValues extends Record<string, unknown>> =
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
    TBaseInputType<TFormValues> &
    TAdditionInputType

export type TEditorType<TFormValues extends Record<string, unknown>> =
  MDEditorProps &
    TBaseInputType<TFormValues> & {
      labelClassName?: string
      containerClassName?: string
    }

export type TSelectType<TFormValues extends Record<string, unknown>> =
  TBaseInputType<TFormValues> &
    TAdditionInputType &
    ReactSelectProps & {
      isMulti?: boolean
      onChange?: (newValue: any) => void
    }

type TBaseInputType<TFormValues extends Record<string, unknown>> = {
  name: Path<TFormValues>
  rules?: RegisterOptions<TFormValues>
  label?: ReactNode
}

type TAdditionInputType = {
  labelClassName?: string
  containerClassName?: string
  leftNode?: ReactNode
  leftNodeClassName?: string
  rightNode?: ReactNode
  rightNodeClassName?: string
}
