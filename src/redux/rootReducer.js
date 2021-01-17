import { combineReducers } from 'redux'
import testReducer from './Test/TestReducer'
import postReducer from './Post/PostReducer'

const rootReducer = combineReducers({
    test: testReducer,
    post: postReducer
})

export default rootReducer