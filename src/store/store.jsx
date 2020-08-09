import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './combineReducer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const store = createStoreWithMiddleware(rootReducer)

export default store;