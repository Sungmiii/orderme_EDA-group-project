import { combineReducers } from 'redux'

import reset from './resetReducer'
import goals from './dropReducer'

const reducers = combineReducers({
    reset,
    goals
})

export default reducers