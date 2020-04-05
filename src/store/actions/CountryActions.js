export const addStatistics = ({ statistics }) => ({
  type: 'ADD_STATISTICS',
  data: statistics,
})

export const addFilteredStatistics = ({ filteredStatistics }) => ({
  type: 'ADD_FILTERED_STATISTICS',
  data: filteredStatistics,
})

export const removeFilteredStatistics = () => ({
  type: 'REMOVE_FILTERED_STATISTICS',
})

export const addStickyStatistic = ({ stickyStatisticName }) => ({
  type: 'ADD_STICKY_STATISTIC',
  data: stickyStatisticName,
})

export const removeStickyStatistic = ({ stickyStatisticName }) => ({
  type: 'REMOVE_STICKY_STATISTIC',
  data: stickyStatisticName,
})

export const addModalStatistic = ({ modalStatistic, modalStatisticName }) => ({
  type: 'ADD_MODAL_STATISTIC',
  data: modalStatistic,
  name: modalStatisticName,
})

export const removeModalStatistic = () => ({ type: 'REMOVE_MODAL_STATISTIC' })
export const toggleFilterInUse = () => ({ type: 'TOGGLE_FILTER_IN_USE' })
export const changeFilteredInput = ({ filteredInput }) => ({
  type: 'CHANGE_FILTERED_INPUT',
  data: filteredInput,
})

export const saveScrollState = ({ left, top }) => ({
  type: 'SAVE_SCROLL_STATE',
  data: [left, top],
})

export const toggleColorTheme = ({ colorTheme }) => ({
  type: 'TOGGLE_COLOR_THEME',
  data: colorTheme,
})
