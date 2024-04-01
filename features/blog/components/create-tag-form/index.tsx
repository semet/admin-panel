import { Button } from '@/components/base'
import { Input } from '@/components/form'
import { TTagForm } from '@/features/blog'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { schema } from './schema'
import { TProps } from './type'

export const CreateTagForm: FC<TProps> = (props) => {
  const { onCancel, onClose } = props
  const formMethods = useForm<TTagForm>({
    resolver: zodResolver(schema)
  })

  const { reset, handleSubmit, watch, setValue } = formMethods

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (value && name && name === 'name') {
        setValue(
          'slug',
          value.name ? value.name.toLowerCase().replace(/\s+/g, '-') : ''
        )
      }
    })

    return () => subscription.unsubscribe()
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    toast.success('Tag created successfully')
    onClose()
  })
  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3"
      >
        <Input
          name="name"
          label="Name"
          required
        />
        <Input
          name="slug"
          label="Slug"
          required
          disabled
        />
        <div className="flex gap-2">
          <Button
            title="Cancel"
            size="sm"
            variant="secondary"
            type="reset"
            onClick={() => {
              reset()
              onCancel()
            }}
          />
          <Button
            title="Save"
            size="sm"
            type="submit"
          />
        </div>
      </form>
    </FormProvider>
  )
}
