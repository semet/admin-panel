import { Button } from '@/components/base'
import { TProps } from './type'

export const FloatingButton: TProps = (props) => {
  return (
    <Button
      className="group fixed  bottom-6 right-6 rounded-full py-4 shadow-lg"
      {...props}
    />
  )
}
