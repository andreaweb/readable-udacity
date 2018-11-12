import {
		GET_POSTS,
		GET_POST,
		GET_RESPONSE,
		GET_CATEGORIES,
		GET_COMMENTS} 
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

function post(state = [], action){
	switch(action.type){
		case GET_POST:
			return {
				...state, 
				post: action.post
			}	
		default:
			return state
	}
}

function response(state = [], action){
	switch(action.type){
		case GET_RESPONSE:
			return {
				...state,
				response: action.response
			}
		default:
			return state
	}
}

function comments(state = [], action){
	switch(action.type){
		case GET_COMMENTS:
			return {
				...state,
				comments: action.comments
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

const rootReducer = combineReducers({posts, post, response, comments, categories})

export default rootReducer