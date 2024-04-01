import { loadTagsRequest } from '@/features/blog'
import { Tables } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useGetTags = () => {
  return useQuery<Tables<'tags'>[]>({
    queryKey: ['tags'],
    queryFn: () => loadTagsRequest(),
    enabled: true
  })
}

export const formattedTags = () => {
  const { data } = useGetTags()
  return data
    ? data
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((tag) => ({
          label: tag.name,
          value: tag.slug
        }))
    : []
}
