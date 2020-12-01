import app, { db } from '../../Components/Auth/firebase'
import { setLoader, stopLoader } from './loaderActions'
import types from './types'

export const getUser = () => dispatch => {
  dispatch(setLoader())
  let connections = {}
  app.auth().onAuthStateChanged(user => {
    if(user) {
      const {displayName, email, photoURL, uid} = user
      db.collection('connections').where('userId', '==', uid).get().then(data => {
        data.forEach(connection => {
          connections = {...connections, connections: connection.data().connections}
          connections.id = connection.id
        })
      }).then(() => {
        dispatch(setUser({
          username: displayName ? displayName : null,
          email,
          avatar: photoURL,
          userId: uid,
          connections
        }))
      })
      dispatch(stopLoader())
    }
    dispatch(stopLoader())
  })
}

export const checkUserChanges = () => dispatch => {
  const user = app.auth().currentUser
  let connections = {}
  db.collection("connections").where('userId', '==', user.uid)
    .onSnapshot(data => {
        data.forEach(connection => {
          connections = {...connections, connections: connection.data().connections}
          connections.id = connection.id
          dispatch(setUser({
            username: user.displayName ? user.displayName : null,
            email: user.email,
            avatar: user.photoURL,
            userId: user.uid,
            connections
          }))
        })
    });
}

export const setUser = (user) => {
  return {
    type: types.SET_USER,
    payload: {
      loggedIn: true,
      user
    }
  }
}

export const loginUser = (user) => {
  return {
    type: types.LOGIN_USER,
    payload: user
  }
}

export const logoutUser = () => {
  return {
    type: types.LOGOUT_USER,
  }
}