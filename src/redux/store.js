import {createStore, applyMiddleware, combineReducers} from 'redux';
import showReducer from './reducers/showReducer';
import starWarsReducer from "./reducers/starWarsReducer";
import breakingBadReducer from "./reducers/breakingBadReducers";
import promise from "redux-promise-middleware";

const rootReducer = combineReducers({
    showReducer,
    starWarsReducer,
    breakingBadReducer
})

export default createStore(rootReducer, applyMiddleware(promise));