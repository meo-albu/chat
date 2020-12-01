
import types from '../actions/types'

const defaultState = {
  loggedIn: false,
  user: {}
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        loggedIn: action.payload.loggedIn,
        user: action.payload.user
      }
    case types.LOGIN_USER:
      return {
        loggedIn: true,
        user: action.payload
      }
    case types.LOGOUT_USER:
      return {
        loggedIn: false,
        user: {}
      }
    default:
      return state
  }
}

export default userReducer