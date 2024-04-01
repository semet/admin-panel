import { DashboardLayout, PageTitle } from '@/layouts/dashboard'
import { createServerPropsClient } from '@/utils/suppabase'
import { GetServerSideProps } from 'next'
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { auth } = createServerPropsClient(context)
  const { data, error } = await auth.getUser()
  if (error) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}
