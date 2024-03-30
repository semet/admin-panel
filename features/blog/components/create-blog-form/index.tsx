import { Button } from '@/components/base'
import { CheckBox, Input, MDXEditor, Select } from '@/components/form'
import { TBlogForm } from '@/features/blog'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, Fragment } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { dummyCategory, dummyTags } from './dummy'
import { schema } from './schema'

export const CreateBlogForm: FC = () => {
  const formMethods = useForm<TBlogForm>({
    resolver: zodResolver(schema)
  })

  const { handleSubmit } = formMethods

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <Fragment>
      <FormProvider {...formMethods}>
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-2 gap-4"
        >
          <Input
            name="title"
            label="Title"
            placeholder="Blog Title"
          />
          <Select
            name="category"
            label="Category"
            placeholder="Blog Category"
            options={dummyCategory}
          />

          <Select
            name="tags"
            label="Tags"
            isSearchable
            isMulti
            options={dummyTags}
            containerClassName="col-span-2"
            placeholder="Select tags"
          />
          <MDXEditor
            name="content"
            className="col-span-2"
          />

          <div className="col-span-2 flex justify-between">
            <CheckBox
              name="published"
              label="Published"
            />
            <div className="flex justify-end gap-2">
              <Button
                title="Cancel"
                type="reset"
                variant="dark"
              />
              <Button
                title="Save"
                type="submit"
                variant="primary"
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Fragment>
  )
}
