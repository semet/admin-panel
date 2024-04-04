import { EditorButton } from '@/components/editor'
import { Select } from '@/components/form'
import { FC, useCallback } from 'react'
import { BsBlockquoteRight } from 'react-icons/bs'
import {
  MdClearAll,
  MdCode,
  MdFormatBold,
  MdFormatClear,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatStrikethrough,
  MdFormatUnderlined,
  MdKeyboardReturn,
  MdOutlineImage,
  MdOutlineLink,
  MdOutlineLinkOff,
  MdRedo,
  MdUndo
} from 'react-icons/md'
import { PiCodeBlock } from 'react-icons/pi'
import { TProps } from './type'

export const Toolbar: FC<TProps> = (props) => {
  const { editor } = props

  if (!editor) return null

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()

      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }, [editor])

  const addImage = useCallback(() => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  return (
    <div className="sticky top-16 z-10 rounded-t-md border-b bg-white p-2 shadow-md">
      <div className="flex items-center gap-2">
        <EditorButton
          title="Undo"
          icon={<MdUndo />}
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        />
        <EditorButton
          title="Redo"
          icon={<MdRedo />}
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        />
        <Select
          name="heading"
          placeholder="Heading"
          onChange={(event) => {
            const { value } = event

            value === 'paragraph'
              ? editor.chain().focus().setParagraph().run()
              : editor.chain().focus().toggleHeading({ level: value }).run()
          }}
          options={[
            { value: 1, label: 'Heading 1' },
            { value: 2, label: 'Heading 2' },
            { value: 3, label: 'Heading 3' },
            { value: 4, label: 'Heading 4' },
            { value: 5, label: 'Heading 5' },
            { value: 6, label: 'Heading 6' },
            { value: 'paragraph', label: 'Paragraph' }
          ]}
        />
        <EditorButton
          title="Bold"
          icon={<MdFormatBold />}
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          active={editor.isActive('bold')}
        />
        <EditorButton
          title="Italic"
          icon={<MdFormatItalic />}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          active={editor.isActive('italic')}
        />
        <EditorButton
          title="Underline"
          icon={<MdFormatUnderlined />}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          active={editor.isActive('underline')}
        />
        <EditorButton
          title="Strikethrough"
          icon={<MdFormatStrikethrough />}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          active={editor.isActive('strike')}
        />
        <EditorButton
          title="Code"
          icon={<MdCode />}
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          active={editor.isActive('code')}
        />
        <EditorButton
          title="Clear formatting"
          icon={<MdFormatClear />}
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        />
        <EditorButton
          title="Line break"
          icon={<MdKeyboardReturn />}
          onClick={() => editor.chain().focus().setHardBreak().run()}
        />
        <EditorButton
          title="Clear all"
          icon={<MdClearAll />}
          onClick={() => editor.chain().focus().clearNodes().run()}
        />
        <EditorButton
          title="Bullet list"
          icon={<MdFormatListBulleted />}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          disabled={!editor.can().chain().focus().toggleBulletList().run()}
          active={editor.isActive('bulletList')}
        />
        <EditorButton
          title="Numbered list"
          icon={<MdFormatListNumbered />}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          disabled={!editor.can().chain().focus().toggleOrderedList().run()}
          active={editor.isActive('orderedList')}
        />
        <EditorButton
          title="Code block"
          icon={<PiCodeBlock />}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
          active={editor.isActive('codeBlock')}
        />
        <EditorButton
          title="Blockquote"
          icon={<BsBlockquoteRight />}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          disabled={!editor.can().chain().focus().toggleBlockquote().run()}
          active={editor.isActive('blockquote')}
        />
        <EditorButton
          title="Image"
          icon={<MdOutlineImage />}
          onClick={addImage}
        />
        <EditorButton
          title="Link"
          icon={<MdOutlineLink />}
          onClick={setLink}
        />
        <EditorButton
          title="Unlink"
          icon={<MdOutlineLinkOff />}
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive('link')}
        />
      </div>
    </div>
  )
}
