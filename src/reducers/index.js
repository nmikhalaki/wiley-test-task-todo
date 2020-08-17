import {combineReducers} from 'redux'
import todos from './todos'
import visibility from './visibility'

const rootReducer = combineReducers({
  todos: todos,
  visibilitySettings: visibility
})

export default rootReducer