import React, { useState } from 'react'
import { useSimpleState } from 'use-simple-state'
import {
  addStickyStatistic,
  removeStickyStatistic,
} from '../store/actions/CountryActions'

export default function Country(props) {
  const [sticky, toggleSticky] = useState(props.sticky)
  const [state, dispatch] = useSimpleState()

  const handleToggleSticky = () => {
    if (!sticky) {
      dispatch(addStickyStatistic({ stickyStatisticName: props.name }))
    } else {
      dispatch(removeStickyStatistic({ stickyStatisticName: props.name }))
    }
    toggleSticky(!sticky)
  }

  const handleClickDetails = () => {}

  const lastStatistic = props.statistic.slice(-1)[0]
  const stickyBtnText = sticky ? 'Unstick' : 'Stick'

  return (
    <div className="countryDiv">
      <div
        className={sticky ? 'countryElement stickyElement' : 'countryElement'}
        key={props.name}
      >
        <h3 className="countryElementHeader">{props.name}</h3>
        <p className="countryElementFieldRow">
          <span className="countryElementFieldLabel">Date:</span>
          <span className="countryElementFieldValue">
            {lastStatistic['date']}
          </span>
        </p>
        <p className="countryElementFieldRow">
          <span className="countryElementFieldLabel">Confirmed:</span>
          <span className="countryElementFieldValue">
            {lastStatistic['confirmed']}
          </span>
        </p>
        <p className="countryElementFieldRow">
          <span className="countryElementFieldLabel">Deaths:</span>
          <span className="countryElementFieldValue">
            {lastStatistic['deaths']}
          </span>
        </p>
        <p className="countryElementFieldRow">
          <span className="countryElementFieldLabel">Recovered:</span>
          <span className="countryElementFieldValue">
            {lastStatistic['recovered']}
          </span>
        </p>
        <div className="countryDivElementButtons">
          <button className="btnDetails" onClick={handleClickDetails}>
            Details
          </button>
          <button className="btnSticky" onClick={handleToggleSticky}>
            {stickyBtnText}
          </button>
        </div>
      </div>
    </div>
  )
}
