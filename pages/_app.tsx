import '@/styles/globals.css'
import { TAppPropsWithLayout } from '@/types'
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Fragment, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const interFont = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function App(props: TAppPropsWithLayout) {
  const { Component, pageProps } = props
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false,
            retryOnMount: false,
            retry: false
          },
          mutations: {
            retry: false
          }
        }
      })
  )

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <meta
          name="robots"
          content="noindex, nofollow"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ToastContainer autoClose={1500} />
          {getLayout(
            <main className={interFont.className}>
              <Component {...pageProps} />
            </main>
          )}
        </HydrationBoundary>
      </QueryClientProvider>
    </Fragment>
  )
}
