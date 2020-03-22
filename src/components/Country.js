import React from 'react'

function Country(props) {

  const lastStatistic = props.statistics.slice(-1)[0]

  return (
    <div className="countryDiv">
      <div className="countryElement" key={props.name}>
        <h3>{props.name}</h3>
        <p>Date: {lastStatistic['date']}</p>
        <p>Confirmed: {lastStatistic['confirmed']}</p>
        <p>Deaths: {lastStatistic['deaths']}</p>
        <p>Recovered: {lastStatistic['recovered']}</p>
      </div>
    </div>
  )
}

export default Country