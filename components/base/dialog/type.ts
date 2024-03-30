import { Dispatch, PropsWithChildren, SetStateAction } from 'react'

export type TProps = PropsWithChildren<{
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  title: string
}>
