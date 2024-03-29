import { z } from 'zod'

export const schema = z.object({
  email: z.string().email('Invalid email address.'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters long'),
  remember: z.boolean()
})
