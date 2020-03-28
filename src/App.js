import React, { useEffect } from 'react'
import CoronaDesk from './components/CoronaDesk'
import CountryModal from './components/modals/CountryModal'
import { useSimpleState } from 'use-simple-state'
import { addStatistics } from './store/actions/CountryActions'

function App() {
  const [state, dispatch] = useSimpleState()

  const fetchState = async () => {
    await fetch('https://pomber.github.io/covid19/timeseries.json')
      .then(response => response.json())
      .then(statistics => {
        Object.keys(statistics).map(stat => {
          return statistics[stat].reverse()
        })
        dispatch(addStatistics({ statistics }))
      })
  }

  useEffect(() => {
    fetchState()
  }, [])

  return (
    <div className="appDiv">
      {Object.keys(state.modalStatistic).length > 0 ? (
        <div>
          <CountryModal />
          <CoronaDesk visible={false} />
        </div>
      ) : (
        <CoronaDesk visible={true} />
      )}
    </div>
  )
}

export default App
