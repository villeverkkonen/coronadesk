import React, { useEffect } from "react"
import CoronaDesk from "./components/CoronaDesk"
import { useSimpleState } from "use-simple-state"
import { addStatistics } from "./store/actions/CountryActions"

function App() {
  const [state, dispatch] = useSimpleState()

  const fetchStatistics = async () => {
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(statistics => {
        dispatch(addStatistics({ statistics }))
      })
  }
  useEffect(() => {
    fetchStatistics()
  }, [])
  return (
    <div className="appDiv">
      {<CoronaDesk />}
    </div>
  )
}

export default App
