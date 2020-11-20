
import types from '../actions/types'
import {darkTheme, lightTheme} from '../../Theme/theme'

!localStorage.getItem('darkTheme') && localStorage.setItem('darkTheme', false)
const parsedTheme = JSON.parse(localStorage.getItem('darkTheme'))

const defaultState = {
  darkTheme: parsedTheme,
  theme: parsedTheme ? darkTheme : lightTheme
}

const themeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.DARK_THEME:
      localStorage.setItem('darkTheme', true)
      return {
        darkTheme: true,
        theme: darkTheme
      }
    case types.LIGHT_THEME:
      localStorage.setItem('darkTheme', false)
      return {
        darkTheme: false,
        theme: lightTheme
      }
    default:
      return state
  }
}

export default themeReducer