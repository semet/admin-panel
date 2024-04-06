import { Toolbar } from '@/components/editor'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FC, useId } from 'react'
import { Controller, get, useFormContext } from 'react-hook-form'
import { TProps } from './type'

const extensions = [
  StarterKit,
  Link.configure({
    openOnClick: false,
    autolink: true
  }),
  Image.configure({
    inline: true
  }),
  Underline,
  TextAlign.configure({
    types: ['heading', 'paragraph']
  })
]

export const TextEditor: FC<TProps> = (props) => {
  const { name, id } = props

  const generatedId = useId()

  const {
    control,
    setValue,
    watch,
    formState: { errors }
  } = useFormContext()

  const watchContent = watch(name)
  const error = get(errors, name)

  const editor = useEditor({
    extensions,
    content: watchContent,
    onUpdate: ({ editor }) => {
      setValue(name, editor.getHTML() as any)
    }
  })

  return (
    <div className="relative flex w-full flex-col">
      <Toolbar editor={editor} />
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <EditorContent
            editor={editor}
            id={id ?? generatedId}
            onClick={() => editor?.commands.focus()}
            className="prose min-w-full rounded-b-md bg-white p-2"
            {...field}
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
