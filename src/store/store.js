//third
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
//local
import { authReducer } from "../reducers/auth-reducer";



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
})

export const store = createStore(
  reducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  //solo
  composeEnhancers(
    applyMiddleware(thunk)
  )
)