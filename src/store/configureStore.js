import reducer from '../reducers/reducers'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

let store = createStore(reducer, applyMiddleware(thunk))

export default store