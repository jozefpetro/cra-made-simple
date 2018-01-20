import { combineReducers } from 'redux'
import author from 'stores/author/reducer'

const rootReducer = {
  author
}

export const createReducer = asyncReducers => combineReducers({ ...rootReducer, ...asyncReducers })

export default combineReducers(rootReducer)
