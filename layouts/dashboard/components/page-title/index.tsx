import { Breadcrumb } from '@/layouts/dashboard'
import { FC } from 'react'
import { TProps } from './type'

export const PageTitle: FC<TProps> = ({ title, withBreadcrumb }) => {
  return (
    <div className="my-sm mb-4 flex flex-col gap-2">
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      {withBreadcrumb && <Breadcrumb />}
    </div>
  )
}
