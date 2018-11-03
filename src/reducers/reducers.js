import {GET_POSTS,
		GET_CATEGORIES} 
		from '../actions/actions.js';
import {combineReducers} from 'redux';

function posts(state = [], action){
	switch(action.type){
		case GET_POSTS:
			return {
				...state, 
				posts: action.posts
			}		
		default:
			return state
	}
}

function categories(state = [], action){
	switch(action.type){
		case GET_CATEGORIES:
			return {
				...state, 
				categories: action.categories
			}	
		default:
			return state
	}
}

const rootReducer = combineReducers({posts, categories})

export default rootReducer