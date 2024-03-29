import { decodeJWT, firebaseAuth } from '@/utils'
import { getCookie, setCookie } from 'cookies-next'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect
} from 'react'
import { TAuthContextType } from './type'

const AuthContext = createContext<TAuthContextType | undefined>(undefined)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { push } = useRouter()
  const token = getCookie('token')

  useEffect(() => {
    // if (!token) {
    //   firebaseAuth.signOut()
    //   push('/auth/login')
    // }
    const decodedToken = decodeJWT(token as string)

    if (decodedToken && decodedToken.exp) {
      const currentTime = dayjs()
      const expirationTime = dayjs(decodedToken.exp * 1000)
      if (expirationTime.diff(currentTime, 'minute') < 5) {
        if (firebaseAuth.currentUser) {
          firebaseAuth.currentUser
            .getIdTokenResult(true)
            .then(({ token, expirationTime }) => {
              setCookie('token', token, {
                expires: new Date(expirationTime),
                path: '/',
                sameSite: 'strict'
              })
            })
        }
      }
    }
  }, [token])

  const values = {}

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
