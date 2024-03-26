import React, { FC, Fragment, PropsWithChildren } from 'react'

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <div>Dashboard Layout</div>
      {children}
    </Fragment>
  )
}
