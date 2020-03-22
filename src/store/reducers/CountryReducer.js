import {
  ADD_STATISTICS,
  ADD_FILTERED_STATISTICS,
  REMOVE_FILTERED_STATISTICS,
  ADD_STICKY_STATISTIC,
  REMOVE_STICKY_STATISTIC,
  SWITCH_FILTER_IN_USE,
} from "../constants/CountryConstants"

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
    case SWITCH_FILTER_IN_USE:
      return { ...state, filterInUse: !state.filterInUse }
    default:
      return state
  }
}

export default countryReducer
