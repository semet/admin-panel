import { TTagCreate } from '@/features/blog'
import { Tables } from '@/types'
import { createComponentClient } from '@/utils'

const suppabase = createComponentClient()
export const loadTagsRequest = async () => {
  const { data, error } = await suppabase
    .from('tags')
    .select('id, name, slug')
    .returns<Tables<'tags'>[]>()
  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const createTagRequest = async (payload: TTagCreate) => {
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
