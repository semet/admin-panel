import { TLoginRequest } from '@/features/auth'
import { firebaseAuth } from '@/utils'
import { signInWithEmailAndPassword } from 'firebase/auth'
export const loginRequest = async (data: TLoginRequest) => {
  const { email, password, remember } = data
  try {
    const user = await signInWithEmailAndPassword(firebaseAuth, email, password)

    return user
  } catch (error) {
    throw error
  }
}
