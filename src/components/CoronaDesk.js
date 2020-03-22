import React from "react"
import CountryList from "./CountryList"
import CountrySearch from "./CountrySearch"
import { useSimpleState } from "use-simple-state"

const CoronaDesk = () => {
  const [state, dispatch] = useSimpleState()

  return (
    <div className="coronaDeskDiv">
      <h1>Corona Desk</h1>
      <h3>Corona statistics all over the world</h3>
      <CountrySearch />
      <CountryList />
    </div>
  )
}

export default CoronaDesk
