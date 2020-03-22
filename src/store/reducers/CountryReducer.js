import {
  ADD_STATISTICS,
  ADD_FILTERED_STATISTICS,
  REMOVE_FILTERED_STATISTICS,
  SWITCH_FILTER_IN_USE,
} from "../constants/CountryConstants"

export const countryReducer = (state, action) => {
  switch (action.type) {
    case ADD_STATISTICS:
      return { ...state, statistics: action.data }
    case ADD_FILTERED_STATISTICS:
      return { ...state, filteredStatistics: action.data }
    case REMOVE_FILTERED_STATISTICS:
      return { ...state, filteredStatistics: {} }
    case SWITCH_FILTER_IN_USE:
      return { ...state, filterInUse: !state.filterInUse }
    default:
      return state
  }
}

export default countryReducer
