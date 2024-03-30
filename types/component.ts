export type TVariant =
  | 'primary'
  | 'outline-primary'
  | 'secondary'
  | 'outline-secondary'
  | 'dark'
  | 'outline-dark'
  | 'text'
export type TSize = 'sm' | 'md' | 'lg'

export type TCancelable = {
  onCancel: () => void
}
