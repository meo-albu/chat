import { db } from '../../Components/Auth/firebase'
import types from './types'

export const setChatRoom = () => {
  return {
    type: types.SET_CHATROOM
  }
}

export const closeChatRoom = () => {
  return {
    type: types.CLOSE_CHATROOM
  }
}

export const setConnection = connectionId => dispatch => {
  db.collection('users').where('userId', '==', connectionId)
    .get().then(data => {
      data.forEach(user => {
        dispatch({
          type: types.SET_CONNECTION,
          payload: user.data()
        })
      })
    })
}