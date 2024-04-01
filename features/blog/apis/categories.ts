import { TCategoryCreate } from '@/features/blog'
import { Tables } from '@/types'
import { createComponentClient } from '@/utils'

const suppabase = createComponentClient()

export const loadCategoriesRequest = async () => {
  const { data, error } = await suppabase
    .from('categories')
    .select('id, name, slug, image')
    .returns<Tables<'categories'>[]>()
  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const createCategoryRequest = async (payload: TCategoryCreate) => {
  const { name, slug, image } = payload
  const { data, error } = await suppabase
    .from('categories')
    .insert({ name, slug, image })
    .single()
  if (error) {
    throw new Error(error.message)
  }
  return data
}
