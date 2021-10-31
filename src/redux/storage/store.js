//Dependencias
import { compose, combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import loginReducer from '../reducers/loginReducer';
//Reducers

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
    Logueado: loginReducer
})

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)
