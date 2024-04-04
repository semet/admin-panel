import { z } from 'zod'

export const schema = z.object({
  title: z.string().min(10, 'Title must be at least 10 characters'),
  category: z.object(
    {
      label: z.string(),
      value: z.string()
    },
    {
      invalid_type_error: 'Invalid category',
      required_error: 'Category is required'
    }
  ),
  content: z
    .string({
      invalid_type_error: 'Invalid content',
      required_error: 'Content is required'
    })
    .min(10, {
      message: 'Content must be at least 10 characters'
    }),
  tags: z
    .array(
      z.object({
        label: z.string(),
        value: z.string()
      }),
      {
        invalid_type_error: 'Invalid tag',
        required_error: 'At least one tag must be selected'
      }
    )
    .nonempty({
      message: 'At least one tag must be selected'
    }),
  published: z.boolean().optional()
})
