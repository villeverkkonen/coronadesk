import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SimpleStateProvider } from 'use-simple-state'
import countryReducer from './store/reducers/CountryReducer'
import './styles/app.scss'
import './styles/countrydesk.scss'
import './styles/responsive.scss'
import './styles/modal.scss'

const initialState = {
  statistics: {},
  filteredStatistics: {},
  stickyStatistics: {},
  modalStatistic: {},
  modalStatisticName: '',
  filterInUse: false,
  filteredInput: '',
  scrollState: [0, 0],
  colorTheme: 'dark'
}

ReactDOM.render(
  <SimpleStateProvider initialState={initialState} reducers={[countryReducer]}>
    <App />
  </SimpleStateProvider>,
  document.getElementById('root')
)
