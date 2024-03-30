import { z } from 'zod'

export const schema = z.object({
  title: z.string().min(10, 'Title must be at least 10 characters'),
  category: z.object({
    label: z.string(),
    value: z.string().min(1, 'Category must be selected')
  }),
  content: z.string().min(10, 'Content must be at least 100 characters'),
  tags: z
    .array(
      z.object({
        label: z.string(),
        value: z.string()
      })
    )
    .nullable(),
  published: z.boolean().optional()
})
