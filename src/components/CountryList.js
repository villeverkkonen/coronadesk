import React from "react"
import Country from "./Country"

function CountryList(props) {
  return (
    <div className="countryListDiv">
      {Object.keys(props.countries).map(country => (
        <div key={country}>
          <Country name={country} statistics={props.countries[country]} />
        </div>
      ))}
    </div>
  )
}

export default CountryList
