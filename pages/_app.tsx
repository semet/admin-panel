import '@/styles/globals.css'
import { TAppPropsWithLayout } from '@/types'
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import Head from 'next/head'
import { Fragment, useState } from 'react'
import { ToastContainer } from 'react-toastify'

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
          {getLayout(<Component {...pageProps} />)}
        </HydrationBoundary>
      </QueryClientProvider>
    </Fragment>
  )
}
