export const tagsFormatter = (
  tags: Array<{
    label: string
    value: string
  }>
): string => {
  return tags.map((tag) => tag.value).join(', ')
}
