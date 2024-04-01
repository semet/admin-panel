import { loadBlogsRequest } from '@/features/blog'
import { Tables } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useGetBlogs = () => {
  return useQuery<Tables<'posts'>[]>({
    queryKey: ['posts'],
    queryFn: () => loadBlogsRequest(),
    enabled: true
  })
}
