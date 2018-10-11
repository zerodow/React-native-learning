import { combineReducers } from 'redux'
import lengthReducer from './lengthReducer'
export default combineReducers({
    length: lengthReducer,
})
