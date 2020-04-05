import {
  ADD_STATISTICS,
  ADD_FILTERED_STATISTICS,
  REMOVE_FILTERED_STATISTICS,
  ADD_STICKY_STATISTIC,
  REMOVE_STICKY_STATISTIC,
  TOGGLE_FILTER_IN_USE,
  ADD_MODAL_STATISTIC,
  REMOVE_MODAL_STATISTIC,
  CHANGE_FILTERED_INPUT,
  SAVE_SCROLL_STATE,
  TOGGLE_COLOR_THEME
} from '../constants/CountryConstants'

export const countryReducer = (state, action) => {
  const stickyStatistics = Object.assign(state.stickyStatistics)
  switch (action.type) {
    case ADD_STATISTICS:
      return { ...state, statistics: action.data }
    case ADD_FILTERED_STATISTICS:
      return { ...state, filteredStatistics: action.data }
    case REMOVE_FILTERED_STATISTICS:
      return { ...state, filteredStatistics: {} }
    case ADD_STICKY_STATISTIC:
      stickyStatistics[action.data] = state.statistics[action.data]
      return { ...state, stickyStatistics }
    case REMOVE_STICKY_STATISTIC:
      delete stickyStatistics[action.data]
      return { ...state, stickyStatistics }
    case TOGGLE_FILTER_IN_USE:
      return { ...state, filterInUse: !state.filterInUse }
    case ADD_MODAL_STATISTIC:
      return {
        ...state,
        modalStatistic: action.data,
        modalStatisticName: action.name,
      }
    case REMOVE_MODAL_STATISTIC:
      return { ...state, modalStatistic: {} }
    case CHANGE_FILTERED_INPUT:
      return { ...state, filteredInput: action.data }
    case SAVE_SCROLL_STATE:
      return { ...state, scrollState: [action.data[0], action.data[1]] }
    case TOGGLE_COLOR_THEME:
      return { ...state, colorTheme: action.data }
    default:
      return state
  }
}

export default countryReducer
