import { TInputType } from '@/components/type'
import { FieldValues } from 'react-hook-form'

export type TProps = TInputType<
  Record<string, unknown> extends FieldValues
    ? FieldValues
    : Record<string, unknown>
> & {
  accept?: string
}
