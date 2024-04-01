import { useQueryClient } from '@tanstack/react-query'

export const useQueryActions = (queryKeys: string[]) => {
  const queryClient = useQueryClient()

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys
    })
  }

  const resetQueries = () => {
    queryClient.resetQueries({
      queryKey: queryKeys
    })
  }
  const removeQueries = () => {
    queryClient.removeQueries({
      queryKey: queryKeys
    })
  }

  return {
    invalidateQueries,
    resetQueries,
    removeQueries
  }
}
