import { Dispatch, SetStateAction } from 'react'

export type TLayoutContextType = {
  expanded: boolean
  setExpanded: Dispatch<SetStateAction<boolean>>
  toggleSidebar: () => void
}
