import { getCategoriesRequest } from '@/features/blog'
import { useQuery } from '@tanstack/react-query'

export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => getCategoriesRequest()
  })
}
