import { loadCategoriesRequest } from '@/features/blog'
import { Tables } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useGetCategories = () => {
  return useQuery<Tables<'categories'>[]>({
    queryKey: ['categories'],
    queryFn: async () => loadCategoriesRequest(),
    enabled: true
  })
}

export const formattedCategories = () => {
  const { data } = useGetCategories()
  return data
    ? data
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((category) => ({
          label: category.name,
          value: category.slug
        }))
    : []
}
