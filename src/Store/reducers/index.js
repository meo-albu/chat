import {combineReducers} from 'redux'
import userReducer from './userReducer'
import themeReducer from './themeReducer'
import loaderReducer from './loaderReducer'
import menuReducer from './menuReducer'
import chatRoomReducer from './chatRoomReducer'

const rootReducer = combineReducers({
  userReducer,
  themeReducer,
  loaderReducer,
  menuReducer,
  chatRoomReducer
})

export default rootReducer