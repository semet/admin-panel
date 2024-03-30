import { TCancelable } from '@/types'

export type TProps = TCancelable & {
  onClose: () => void
}
