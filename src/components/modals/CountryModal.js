import React from 'react'
import { useSimpleState } from 'use-simple-state'
import { removeModalStatistic } from '../../store/actions/CountryActions'
import { formatDate } from '../../helpers/HelperFunctions'

export default function CountryModal() {
  const [state, dispatch] = useSimpleState()

  const handleCloseModal = () => {
    dispatch(removeModalStatistic())
    // Scroll back to state user were before opening modal to continue from where was
    window.scrollTo(state.scrollState[0], state.scrollState[1])
  }

  return (
    <div className="modal">
      <div className="btnCloseModal" onClick={handleCloseModal}>
        X
      </div>
      <h3 className="countryElementHeader">{state.modalStatisticName}</h3>

      <div className="countryListDiv">
        {state.modalStatistic.reverse().map(stat => (
          <div className="countryDiv" key={stat['date']}>
            <div className="countryElement">
              <p className="countryElementFieldRow">
                <span className="countryElementFieldLabel">Date:</span>
                <span className="countryElementFieldValue">
                  {formatDate(stat['date'])}
                </span>
              </p>
              <p className="countryElementFieldRow">
                <span className="countryElementFieldLabel">Confirmed:</span>
                <span className="countryElementFieldValue">
                  {stat['confirmed']}
                </span>
              </p>
              <p className="countryElementFieldRow">
                <span className="countryElementFieldLabel">Deaths:</span>
                <span className="countryElementFieldValue">
                  {stat['deaths']}
                </span>
              </p>
              <p className="countryElementFieldRow">
                <span className="countryElementFieldLabel">Recovered:</span>
                <span className="countryElementFieldValue">
                  {stat['recovered']}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
