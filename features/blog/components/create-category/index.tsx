import { Button } from '@/components/base'
import { FC, Fragment } from 'react'
import { IoMdAdd } from 'react-icons/io'

export const CreateCategory: FC = () => {
  return (
    <Fragment>
      <Button
        size="sm"
        title="Category"
        icon={<IoMdAdd className="mr-1" />}
      />
    </Fragment>
  )
}
