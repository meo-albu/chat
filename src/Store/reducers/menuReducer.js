import types from '../actions/types'

const defaultState = {
  active: 'chats'
}

const menuReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_ACTIVE:
      return {
        active: action.payload
      }
    default:
      return state
  }
}

export default menuReducer