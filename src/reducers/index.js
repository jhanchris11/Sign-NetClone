import { combineReducers } from 'redux'
import authReducer from './auth'
// import auth from './auth'

export default combineReducers({
    auth: authReducer
})
