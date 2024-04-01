import { TPostPayload } from '@/features/blog'
import { Tables } from '@/types'
import { createComponentClient } from '@/utils'

const suppabase = createComponentClient()

export const loadBlogsRequest = async () => {
  const { data, error } = await suppabase
    .from('posts')
    .select('id, name, slug, image')
    .returns<Tables<'posts'>[]>()

  if (error) {
    throw new Error(error.message)
  }

  return data
}
export const createBlogRequest = (payload: TPostPayload) => {}
