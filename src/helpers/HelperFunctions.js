export const formatDate = dateString => {
  const date = new Date(dateString)
  // Month index starts at 0 so add 1
  return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
}
