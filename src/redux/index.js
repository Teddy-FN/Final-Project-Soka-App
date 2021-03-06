import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk)) // Connect to extension browser
)

export default store;