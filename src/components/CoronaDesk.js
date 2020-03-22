import React, { Component } from 'react'
import CountryList from './CountryList'
import CountrySearch from './CountrySearch'

class CoronaDesk extends Component {
  constructor(props) {
    super(props)
    this.state = {
      statistics: {},
      filteredStatistics: {}
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  componentDidMount() {
    // Get statistics of COVID-19 for 166 countries
    // Every country has 60 dates with following fields: date, confirmed, deaths, recovered
    fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(statistics => {
      this.setState({ statistics })
    })
  }

  // Triggers when CountrySearch input changes, filter countries starting with keyword
  handleSearchChange() {
    const keyword = document.getElementById('countrySearchInput').value
    const filteredStatistics = {}
    Object.keys(this.state.statistics).forEach(country => {
      if (country.toLowerCase().startsWith(keyword.toLowerCase())) {
        filteredStatistics[country] = this.state.statistics[country]
      }
    })
    this.setState({ filteredStatistics })
  }

  render() {
    return (
      <div className="coronaDeskDiv">
        <h1>Corona Desk</h1>
        <h3>Corona statistics all over the world</h3>
        <CountrySearch handleSearchChange={this.handleSearchChange}/>
        {Object.keys(this.state.filteredStatistics).length > 0
          ? <CountryList countries={this.state.filteredStatistics} />
          : <CountryList countries={this.state.statistics} />
        }
      </div>
    )
  }
}

export default CoronaDesk