import React from "react"
import Country from "./Country"
import { useSimpleState } from "use-simple-state"

export default function CountryList() {
  const [state] = useSimpleState()
  return (
    <div className="countryListDiv">
      {Object.keys(state.stickyStatistics).map(country => (
        <div key={country}>
          <Country
            name={country}
            statistic={state.stickyStatistics[country]}
            sticky={true}
          />
        </div>
      ))}

      {state.filterInUse
        ? Object.keys(state.filteredStatistics).map(country =>
            !Object.keys(state.stickyStatistics).includes(country) ? (
              <div key={country}>
                <Country
                  name={country}
                  statistic={state.filteredStatistics[country]}
                  sticky={false}
                />
              </div>
            ) : null
          )
        : Object.keys(state.statistics).map(country =>
            !Object.keys(state.stickyStatistics).includes(country) ? (
              <div key={country}>
                <Country
                  name={country}
                  statistic={state.statistics[country]}
                  sticky={false}
                />
              </div>
            ) : null
          )}
    </div>
  )
}
