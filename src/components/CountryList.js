import React from "react"
import Country from "./Country"
import { useSimpleState } from "use-simple-state"

function CountryList(props) {
  const [state, dispatch] = useSimpleState()
  return (
    <div className="countryListDiv">
      {state.filterInUse
        ? Object.keys(state.filteredStatistics).map(country => (
            <div key={country}>
              <Country
                name={country}
                statistics={state.filteredStatistics[country]}
              />
            </div>
          ))
        : Object.keys(state.statistics).map(country => (
            <div key={country}>
              <Country name={country} statistics={state.statistics[country]} />
            </div>
          ))}
    </div>
  )
}

export default CountryList
