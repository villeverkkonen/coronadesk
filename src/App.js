import React, { useEffect } from "react"
import CoronaDesk from "./components/CoronaDesk"
import { useSimpleState } from "use-simple-state"
import { addStatistics } from "./store/actions/CountryActions"

function App() {
  const [state, dispatch] = useSimpleState()

  useEffect(() => {
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(statistics => {
        dispatch(addStatistics({ statistics }))
      })
  }, [])
  return (
    <div className="appDiv">
      {<CoronaDesk />}
    </div>
  )
}

export default App
