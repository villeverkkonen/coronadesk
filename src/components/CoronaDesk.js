import React from 'react'
import CountryList from './CountryList'
import CountrySearch from './CountrySearch'

export default function CoronaDesk(props) {
  return (
    <div className={props.visible ? 'coronaDeskDiv' : 'notVisible'}>
      <h1>Corona Desk</h1>
      <h3>Corona statistics all over the world</h3>
      <CountrySearch />
      <CountryList />
    </div>
  )
}
