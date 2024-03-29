import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState
} from 'react'
import { TLayoutContextType } from '@/layouts/dashboard'

const LayoutContext = createContext<TLayoutContextType | undefined>(undefined)

const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const [expanded, setExpanded] = useState<boolean>(true)

  const toggleSidebar = () => {
    setExpanded((prev) => !prev)
  }

  const values = {
    expanded,
    setExpanded,
    toggleSidebar
  }

  return (
    <LayoutContext.Provider value={values}>{children}</LayoutContext.Provider>
  )
}

const useLayout = () => {
  const context = useContext(LayoutContext)

  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider')
  }

  return context
}

export { LayoutProvider, useLayout }
