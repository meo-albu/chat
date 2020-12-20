import types from '../actions/types'

const defaultState = {
  active: false,
  connection: null,
  conversation: null
}

const chatRoomReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_CHATROOM:
      return {
        ...state,
        active: true
      }
    case types.CLOSE_CHATROOM:
      return {
        connection: null,
        conversation: null,
        active: false
      }
    case types.SET_CONNECTION:
      return {
        ...state,
        connection: action.payload
      }
    case types.SET_CONVERSATION:
      return {
        ...state,
        conversation: action.payload
      }
    default:
      return state
  }
}

export default chatRoomReducer