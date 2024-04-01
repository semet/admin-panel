import { TTagForm } from '@/features/blog'
import { createComponentClient } from '@/utils'

const suppabase = createComponentClient()
export const loadTagsRequest = async () => {
  const { data, error } = await suppabase.from('tags').select('id, name, slug')
  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const createTagRequest = async (payload: TTagForm) => {
  const { name, slug } = payload
  const { data, error } = await suppabase
    .from('tags')
    .insert({ name, slug })
    .single()
  if (error) {
    throw new Error(error.message)
  }
  return data
}
