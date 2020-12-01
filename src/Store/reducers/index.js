import {combineReducers} from 'redux'
import userReducer from './userReducer'
import themeReducer from './themeReducer'
import loaderReducer from './loaderReducer'
import menuReducer from './menuReducer'

const rootReducer = combineReducers({
  userReducer,
  themeReducer,
  loaderReducer,
  menuReducer
})

export default rootReducer