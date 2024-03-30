import { BlogWrapper } from '@/features/blog'
import { DashboardLayout, PageTitle } from '@/layouts/dashboard'
import Head from 'next/head'
import { Fragment, ReactElement } from 'react'

const Blog = () => {
  return (
    <Fragment>
      <Head>
        <title>Blog</title>
      </Head>
      <PageTitle
        title="Manage Blog"
        withBreadcrumb
      />
      <BlogWrapper />
    </Fragment>
  )
}

Blog.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)

export default Blog
