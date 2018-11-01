import reducer from '../reducers/reducers'
import {createStore} from 'redux';

let store = createStore(reducer)

export default store