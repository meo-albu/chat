import app, { db } from '../../Components/Auth/firebase'
import { setLoader, stopLoader } from './loaderActions'
import types from './types'

export const getUser = () => dispatch => {
  dispatch(setLoader())
  let connections = []
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
  let connections = []
  db.collection("connections").where('userId', '==', user.uid)
    .onSnapshot(data => {
        data.forEach(connection => {
          connections = {...connections, connections: connection.data().connections}
          connections.id = connection.id
          connections.connections.forEach(conn => {
            db.collection("users").where('userId', '==', conn.userId)
              .onSnapshot(data => {
                  data.forEach(u => {
                    conn.isOnline = u.data().isOnline
                    dispatch(setUser({
                      username: user.displayName ? user.displayName : null,
                      email: user.email,
                      avatar: user.photoURL,
                      userId: user.uid,
                      connections
                    }))
                  })
              });
          })
        })
    })
}

export const changeUsersAvailability = async (isOnline) => {
  let documentId = ''
  await db.collection('users').where('userId', '==', app.auth().currentUser.uid)
    .get()
    .then(data => {
      data.forEach(user => {
        documentId = user.id
      })
    }).then( async () => {
      await db.collection('users').doc(documentId)
      .update({
        isOnline
      })
    })
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