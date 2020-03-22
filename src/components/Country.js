import React from "react"

function Country(props) {
  const lastStatistic = props.statistics.slice(-1)[0]

  return (
    <div className="countryDiv">
      <div className="countryElement" key={props.name}>
        <h3 className="countryElementHeader">{props.name}</h3>
        <p className="countryElementFieldRow">
          <span className="countryElementFieldLabel">Date:</span>
          <span className="countryElementFieldValue">
            {lastStatistic["date"]}
          </span>
        </p>
        <p className="countryElementFieldRow">
          <span className="countryElementFieldLabel">Confirmed:</span>
          <span className="countryElementFieldValue">
            {lastStatistic["confirmed"]}
          </span>
        </p>
        <p className="countryElementFieldRow">
          <span className="countryElementFieldLabel">Deaths:</span>
          <span className="countryElementFieldValue">
            {lastStatistic["deaths"]}
          </span>
        </p>
        <p className="countryElementFieldRow">
          <span className="countryElementFieldLabel">Recovered:</span>
          <span className="countryElementFieldValue">
            {lastStatistic["recovered"]}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Country
