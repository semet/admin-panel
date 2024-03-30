import { TEditorType } from '@/components/type'
import { FieldValues } from 'react-hook-form'

export type TProps = TEditorType<
  Record<string, unknown> extends FieldValues
    ? FieldValues
    : Record<string, unknown>
>
