import { CreateBlogForm, CreateCategory, CreateTag } from '@/features/blog'
import { DashboardLayout, PageTitle } from '@/layouts/dashboard'
import Head from 'next/head'
import { Fragment, ReactElement } from 'react'

const CreateBlog = () => {
  return (
    <Fragment>
      <Head>
        <title>Create Blog</title>
      </Head>
      <PageTitle
        title="Create Blog"
        withBreadcrumb
      />
      <section>
        <div className="flex justify-end gap-2">
          <CreateCategory />
          <CreateTag />
        </div>
        <CreateBlogForm />
      </section>
    </Fragment>
  )
}

CreateBlog.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)

export default CreateBlog
