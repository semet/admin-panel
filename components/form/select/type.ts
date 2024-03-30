import { TSelectType } from '@/components/type'
import { FieldValues } from 'react-hook-form'

export type TProps = TSelectType<
  Record<string, unknown> extends FieldValues
    ? FieldValues
    : Record<string, unknown>
>
