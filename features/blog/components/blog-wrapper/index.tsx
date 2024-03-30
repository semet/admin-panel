import { FloatingButton } from '@/components/base'
import { BlogFilter } from '@/features/blog'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { IoMdAdd } from 'react-icons/io'

export const BlogWrapper: FC = () => {
  const { push } = useRouter()
  return (
    <div className="flex flex-col gap-2">
      <section className="flex justify-between">
        <BlogFilter />
        <FloatingButton
          icon={
            <IoMdAdd className="transform text-xl font-semibold transition-all duration-500 group-hover:rotate-90" />
          }
          variant="secondary"
          onClick={() => push('/blog/create')}
        />
      </section>
      <section>content</section>
      <section>bottom</section>
    </div>
  )
}
