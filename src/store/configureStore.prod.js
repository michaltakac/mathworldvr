import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
)

export default configureStore
