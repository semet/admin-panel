import { EditorContentProps } from '@tiptap/react'
import { FieldValues, Path } from 'react-hook-form'

export type TProps = TEditorType<
  Record<string, unknown> extends FieldValues
    ? FieldValues
    : Record<string, unknown>
>

type TEditorType<TFormValues extends Record<string, unknown>> = Omit<
  EditorContentProps,
  'ref' | 'editor'
> & {
  name: Path<TFormValues>
}
