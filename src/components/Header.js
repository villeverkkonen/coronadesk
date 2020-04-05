import React from 'react'
import { useSimpleState } from 'use-simple-state'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { toggleColorTheme } from '../store/actions/CountryActions'

export default function Header() {
  const [state, dispatch] = useSimpleState()

  const handleToggleColorTheme = (colorTheme) => (event) => {
    event.preventDefault()
    dispatch(toggleColorTheme({ colorTheme }))
    if (colorTheme === 'dark') {
      document.body.style.background = '#252526'
      document.body.style.color = '#d1d2d3'
    } else {
      document.body.style.background = '#d1d2d3'
      document.body.style.color = '#252526'
    }
  }

  return (
    <div className="header">
      {state.colorTheme === 'dark' ? (
        <FontAwesomeIcon
          id="btnColorTheme"
          icon={faSun}
          onClick={handleToggleColorTheme('light')}
        ></FontAwesomeIcon>
      ) : (
        <FontAwesomeIcon
          id="btnColorTheme"
          icon={faMoon}
          onClick={handleToggleColorTheme('dark')}
        ></FontAwesomeIcon>
      )}
    </div>
  )
}
