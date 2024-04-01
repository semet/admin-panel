import { Button, Dialog } from '@/components/base'
import { CreateCategoryForm } from '@/features/blog'
import { FC, Fragment, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'

export const CreateCategory: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Fragment>
      <Button
        size="sm"
        title="Category"
        icon={<IoMdAdd className="mr-1" />}
        onClick={() => setIsOpen(true)}
      />
      <Dialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Create Category"
        children={
          <CreateCategoryForm
            onCancel={() => setIsOpen(false)}
            onClose={() => setIsOpen(false)}
          />
        }
      />
    </Fragment>
  )
}
