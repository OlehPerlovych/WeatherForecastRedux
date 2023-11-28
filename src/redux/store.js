import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import weatherReducer from './reducer';

export const store = createStore(weatherReducer,applyMiddleware(thunk, logger));