import rootReducer from '../reducers/reducers'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store