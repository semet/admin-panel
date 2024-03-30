import { TSize, TVariant } from '@/types'
import { DetailedHTMLProps } from 'react'

export type TProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: TVariant
  size?: TSize
  isLoading?: boolean
  icon?: React.ReactNode
}
