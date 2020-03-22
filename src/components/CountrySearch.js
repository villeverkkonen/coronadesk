import React from 'react'

function CountrySearch(props) {
  return (
    <div className="countrySearchDiv">
      <input type="text" id="countrySearchInput" onChange={props.handleSearchChange} placeHolder="Filter..." />
    </div>
  )
}

export default CountrySearch