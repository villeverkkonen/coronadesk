export const addStatistics = ({ statistics }) => ({
  type: "ADD_STATISTICS",
  data: statistics,
})
export const addFilteredStatistics = ({ filteredStatistics }) => ({
  type: "ADD_FILTERED_STATISTICS",
  data: filteredStatistics,
})
export const removeFilteredStatistics = () => ({
  type: "REMOVE_FILTERED_STATISTICS",
})
export const switchFilterInUse = () => ({ type: "SWITCH_FILTER_IN_USE" })
