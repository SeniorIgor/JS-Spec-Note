import thunk from 'redux-thunk'
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { persistMiddleware } from './middlewares/persist-middleware'

export const store = createStore(
  reducers,
  {},
  applyMiddleware(persistMiddleware, thunk)
)
