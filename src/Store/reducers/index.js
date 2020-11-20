import {combineReducers} from 'redux'
import userReducer from './userReducer'
import themeReducer from './themeReducer'
import loaderReducer from './loaderReducer'

const rootReducer = combineReducers({
  userReducer,
  themeReducer,
  loaderReducer
})

export default rootReducer