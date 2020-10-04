import { combineReducers } from 'redux'
import FormReducer from './reducers/FormReducer'

const rootReducer = combineReducers({
    FormReducer: FormReducer
})

export default rootReducer