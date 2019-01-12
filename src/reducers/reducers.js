import {
		GET_POSTS,
		GET_POST,
		REDIRECT,
		UPDATE_POST,
		DELETE_POST} 
		from '../actions/posts.js';
import {GET_CATEGORIES} from '../actions/actions.js';
import {GET_COMMENTS} from '../actions/comments.js';
import {combineReducers} from 'redux';

function posts(state = [], action){
	switch(action.type){
		case GET_POSTS:
			return {
				...state, 
				posts: action.posts
			}
		case DELETE_POST:
			return {
				...state,
				posts: action.posts
			}
		case UPDATE_POST:
			return {
				...state,
				posts: [...state.posts.filter(post => post.id !== action.post.id), action.post]
			}
		default:
			return state
	}
}

function redirect(state = [], action){
	switch(action.type){
		case REDIRECT:
			return {
				...state,
				redirect: true
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

const rootReducer = combineReducers({posts, post, redirect, comments, categories})

export default rootReducer