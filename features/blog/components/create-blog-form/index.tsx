import { Button } from '@/components/base'
import { TextEditor } from '@/components/editor'
import { CheckBox, Input, Select } from '@/components/form'
import {
  TPostCreate,
  TPostPayload,
  createBlogRequest,
  formattedCategories,
  formattedTags
} from '@/features/blog'
import { useQueryActions } from '@/hooks'
import { tagsFormatter } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { FC, Fragment } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { schema } from './schema'

export const CreateBlogForm: FC = () => {
  const tags = formattedTags()
  const categories = formattedCategories()

  const { invalidateQueries } = useQueryActions(['blogs'])

  const formMethods = useForm<TPostCreate>({
    resolver: zodResolver(schema)
  })

  const { handleSubmit } = formMethods

  const { mutate } = useMutation({
    mutationFn: async (data: TPostPayload) => createBlogRequest(data),
    onSuccess: () => {
      toast.success('Blog created successfully')
      invalidateQueries()
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const onSubmit = handleSubmit((data) => {
    const payload: TPostPayload = {
      author: '1',
      title: data.title,
      content: data.content,
      tags: tagsFormatter(data.tags),
      category: data.category.value,
      slug: data.title.toLowerCase().replace(/\s/g, '-')
    }
    console.log(payload)
    // mutate(payload)
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
            options={categories}
          />

          <Select
            name="tags"
            label="Tags"
            isSearchable
            isMulti
            options={tags}
            containerClassName="col-span-2"
            placeholder="Select tags"
          />
          <div className="col-span-2">
            <TextEditor name="content" />
          </div>

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
