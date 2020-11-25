import { createStore, compose, applyMiddleware } from "redux"
import { rootReducer } from "./reducers"
import thunk from 'redux-thunk'
    
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(
thunk
))



export const store = createStore(
rootReducer,
middleware,
);