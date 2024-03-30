export type TBlog = {
  id: string
  title: string
  category: string
  content: string
  tags: string[]
  published: boolean
}

export type TBlogForm = Omit<TBlog, 'id'>

export type TTag = {
  id: string
  name: string
  slug: string
}

export type TTagForm = Omit<TTag, 'id'>
