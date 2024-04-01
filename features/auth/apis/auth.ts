import { TLoginRequest } from '@/features/auth'
import { createComponentClient } from '@/utils'

export const loginRequest = async (payload: TLoginRequest) => {
  const { auth } = createComponentClient()
  const { error, data } = await auth.signInWithPassword(payload)
  if (error) {
    throw new Error(error.message)
  }
  return data
}
