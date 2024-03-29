import { FC, Fragment, PropsWithChildren } from 'react'
import { Footer } from '@/layouts/auth'

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="relative h-lvh w-full bg-gradient-to-bl from-sky-300 from-10% to-white to-90%">
      <div className="absolute left-1/2 top-[20%] w-[350px] -translate-x-1/2 transform">
        {children}
        <Footer />
      </div>
    </main>
  )
}
