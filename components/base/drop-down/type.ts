import { PropsWithChildren } from 'react'

export type TProps = PropsWithChildren<{
  title: string | JSX.Element
  buttonStyle?: string
  menuStyle?: string
  shoeArrow?: boolean
}>
