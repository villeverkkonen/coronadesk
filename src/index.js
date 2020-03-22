import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SimpleStateProvider } from 'use-simple-state'
import countryReducer from './store/reducers/CountryReducer'
import './styles/app.scss'
import './styles/countrydesk.scss'
import './styles/responsive.scss'

const initialState = {
  statistics: {},
  filteredStatistics: {},
  stickyStatistics: {},
  filterInUse: false,
}

ReactDOM.render(
  <SimpleStateProvider initialState={initialState} reducers={[countryReducer]}>
    <App />
  </SimpleStateProvider>,
  document.getElementById('root')
)
