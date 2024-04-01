import { TTag, loadTagsRequest } from '@/features/blog'
import { useQuery } from '@tanstack/react-query'

export const useGetTags = () => {
  return useQuery<TTag[]>({
    queryKey: ['tags'],
    queryFn: () => loadTagsRequest(),
    enabled: true
  })
}

export const formattedTags = () => {
  const { data } = useGetTags()
  return data
    ?.sort((a, b) => a.name.localeCompare(b.name))
    .map((tag) => ({
      label: tag.name,
      value: tag.id
    }))
}
