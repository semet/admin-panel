import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

/**
 * Extend NextPage
 * See https://nextjs.org/docs/basic-features/layouts#with-typescript
 */
export type TNextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

/**
 * Extend AppPros
 */
export type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout
}

/**
 * Layout component
 */
export interface TLayout {
  children: ReactNode
}
