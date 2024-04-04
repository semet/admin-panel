import { DetailedHTMLProps, ReactNode } from 'react'

export type TProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  icon?: ReactNode
  active?: boolean
}
