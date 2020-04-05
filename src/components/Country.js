import React, { useState } from 'react'
import { useSimpleState } from 'use-simple-state'
import {
  addStickyStatistic,
  removeStickyStatistic,
  addModalStatistic,
  saveScrollState,
} from '../store/actions/CountryActions'
import { formatDate } from '../helpers/HelperFunctions'
import {
  colorThemeDarkStyle,
  colorThemeLightStyle,
} from '../helpers/HelperVariables'
import { findAllByLabelText } from '@testing-library/react'

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

  const handleClickDetails = () => {
    // Save scroll state so user can continue from where was before opening modal
    const doc = document.documentElement
    const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
    dispatch(saveScrollState({ left, top }))
    const statistic = Object.assign(props.statistic)
    const name = Object.assign(props.name)
    dispatch(
      addModalStatistic({
        modalStatistic: statistic,
        modalStatisticName: name,
      })
    )
    // When opening modal scroll to top
    window.scrollTo(0, 0)
  }

  // Get latest date, more dates at Details
  const lastStatistic = Object.assign(props.statistic[0])
  const stickyBtnText = sticky ? 'Unstick' : 'Stick'

  return (
    <div className="countryDiv">
      <div
        style={
          state.colorTheme === 'dark'
            ? colorThemeDarkStyle
            : colorThemeLightStyle
        }
        className={sticky ? 'countryElement stickyElement' : 'countryElement'}
        key={props.name}
      >
        <h3 className="countryElementHeader">{props.name}</h3>
        <p className="countryElementFieldRow">
          <span className="countryElementFieldLabel" style={{color: state.colorTheme === 'dark' ? 'white' : 'black'}}>Date:</span>
          <span className="countryElementFieldValue">
            {formatDate(lastStatistic['date'])}
          </span>
        </p>
        <p className="countryElementFieldRow">
          <span className="countryElementFieldLabel" style={{color: state.colorTheme === 'dark' ? 'white' : 'black'}}>Confirmed:</span>
          <span className="countryElementFieldValue">
            {lastStatistic['confirmed']}
          </span>
        </p>
        <p className="countryElementFieldRow">
          <span className="countryElementFieldLabel" style={{color: state.colorTheme === 'dark' ? 'white' : 'black'}}>Deaths:</span>
          <span className="countryElementFieldValue">
            {lastStatistic['deaths']}
          </span>
        </p>
        <p className="countryElementFieldRow">
          <span className="countryElementFieldLabel" style={{color: state.colorTheme === 'dark' ? 'white' : 'black'}}>Recovered:</span>
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
