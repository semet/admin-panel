import { Tables } from '@/types'

export type TCategoryCreate = Omit<Tables<'categories'>, 'id' | 'created_at'>
//TODO:: change name to POST INPUT
export type TPostCreate = Omit<Tables<'posts'>, 'id' | 'created_at'> & {
  category: TSelectInput
  tags: TSelectInput[]
}

export type TPostPayload = Omit<Tables<'posts'>, 'id' | 'created_at'>

export type TTagCreate = Omit<Tables<'tags'>, 'id' | 'created_at'>

export type TSelectInput = {
  label: string
  value: string
}
