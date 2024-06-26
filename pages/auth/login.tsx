import { LoginForm } from '@/features/auth'
import { AuthLayout } from '@/layouts/auth'
import { createServerPropsClient } from '@/utils'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Fragment, ReactElement } from 'react'

const Login = () => {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-3xl tracking-tight text-slate-700">
          Login Page
        </h1>
        <div className="rounded-md bg-gradient-to-tr from-gray-100 to-white p-xl shadow-sm">
          <LoginForm />
        </div>
      </div>
    </Fragment>
  )
}

Login.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>

export default Login

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { auth } = createServerPropsClient(context)
  const { data, error } = await auth.getUser()
  if (data) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}
