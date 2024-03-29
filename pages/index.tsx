import { DashboardLayout, PageTitle } from '@/layouts/dashboard'
import Head from 'next/head'
import { Fragment, ReactElement } from 'react'

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Fragment>
        {/* PageTitle */}
        <PageTitle title="Dashboard" />
        {/* Content */}
        home
      </Fragment>
    </Fragment>
  )
}

Home.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)

export default Home
