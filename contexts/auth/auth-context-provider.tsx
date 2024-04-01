import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, createContext, useContext } from 'react'
import { TAuthContextType } from './type'

const AuthContext = createContext<TAuthContextType | undefined>(undefined)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { push } = useRouter()
  const token = getCookie('token')

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
