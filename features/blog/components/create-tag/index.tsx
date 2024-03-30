import { Button, Dialog } from '@/components/base'
import { CreateTagForm } from '@/features/blog'
import { FC, Fragment, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'

export const CreateTag: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Fragment>
      <Button
        size="sm"
        variant="secondary"
        title="Tag"
        icon={<IoMdAdd className="mr-1" />}
        onClick={() => setIsOpen(true)}
      />
      <Dialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Create Tag"
        children={
          <CreateTagForm
            onCancel={() => setIsOpen(false)}
            onClose={() => setIsOpen(false)}
          />
        }
      />
    </Fragment>
  )
}
