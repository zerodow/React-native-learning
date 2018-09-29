import { combineReducers } from 'redux'
import changeColorReducer from './changeColorReducer'
export default combineReducers({
    currentColor: changeColorReducer,
})
