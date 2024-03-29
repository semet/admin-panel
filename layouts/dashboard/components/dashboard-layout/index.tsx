import { AuthProvider } from '@/contexts/auth'
import { Header, LayoutProvider, Sidebar } from '@/layouts/dashboard'
import { FC, PropsWithChildren } from 'react'

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthProvider>
      <LayoutProvider>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="w-full">
            <Header />
            <main className="p-md">{children}</main>
          </div>
        </div>
      </LayoutProvider>
    </AuthProvider>
  )
}
