import { getCategories, getPosts, createPost } from '../API.js';
export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_POST = 'DELETE_POST';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_POST = 'EDIT_POST';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_NEW_POST = 'GET_NEW_POST';
export const GET_POSTS = 'GET_POSTS';

function receivePosts(posts){
	return { type: GET_POSTS, posts}
}
function receiveCategories(categories){
	return { type: GET_CATEGORIES, categories}
}
function receiveNewPost(response){
	return { type: GET_NEW_POST, response}
}

export function createNewPost(post){
	return dispatch => {
		return createPost(post)
			.then(
				response => {
					dispatch(
						receiveNewPost(response)
					)
				}
			)
	}
}

export function getAllPosts(){
	return dispatch => {
		return getPosts()
			.then(
				posts => { 
					dispatch(
						receivePosts(posts)
					)
				}
			)
			// .catch(
			// 	error => console.log("Error: ", error)
			// )
	}
	
}

export function getAllCategories(){
	return dispatch => {
		return getCategories()
			.then(
				categories => { 
					dispatch(
						receiveCategories(categories)
					)
				}
			)
			// .catch(
			// 	error => console.log("Error: ", error)
			// )
	}
	
}