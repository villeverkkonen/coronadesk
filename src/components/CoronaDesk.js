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
    // Get statistics of COVID-19 for 
    fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(statistics => {
      this.setState({ statistics })
    })
  }

  handleSearchChange() {
    const keyword = document.getElementById('countrySearch').value
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
      <div>
        <h3>Countries</h3>
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