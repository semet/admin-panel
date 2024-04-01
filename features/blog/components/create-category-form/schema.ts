import { z } from 'zod'

export const schema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  slug: z.string().optional(),
  image: z
    .string()
    .min(1, { message: 'Image is required' })
    .url({ message: 'Invalid URL' })
})
