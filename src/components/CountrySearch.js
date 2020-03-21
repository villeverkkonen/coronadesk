import React from 'react'

function CountrySearch(props) {
  return (
    <div>
      <label htmlFor="countrySearch">Search</label>
      <input type="text" id="countrySearch" onChange={props.handleSearchChange} />
    </div>
  )
}

export default CountrySearch