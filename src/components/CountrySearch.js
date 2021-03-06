import React from 'react'
import { useSimpleState } from 'use-simple-state'
import {
  addFilteredStatistics,
  toggleFilterInUse,
  changeFilteredInput,
} from '../store/actions/CountryActions'

export default function CountrySearch() {
  const [state, dispatch] = useSimpleState()

  // Triggers when CountrySearch input changes, filter countries starting with keyword
  const handleSearchChange = () => {
    const keyword = document.getElementById('countrySearchInput').value

    if (!state.filterInUse && keyword.length > 0) {
      dispatch(toggleFilterInUse())
    } else if (state.filterInUse && keyword.length === 0) {
      dispatch(toggleFilterInUse())
    }

    dispatch(changeFilteredInput({ filteredInput: keyword }))

    const filteredStatistics = {}
    Object.keys(state.statistics).forEach(country => {
      if (country.toLowerCase().startsWith(keyword.toLowerCase())) {
        filteredStatistics[country] = state.statistics[country]
      }
    })
    dispatch(addFilteredStatistics({ filteredStatistics }))
  }
  return (
    <div className="countrySearchDiv">
      <input
        type="text"
        id="countrySearchInput"
        onChange={handleSearchChange}
        placeholder="Filter..."
        value={state.filteredInput}
      />
    </div>
  )
}
