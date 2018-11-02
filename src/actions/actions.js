import { getPosts } from '../API.js';
export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_POST = 'DELETE_POST';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_POST = 'EDIT_POST';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const GET_POSTS = 'GET_POSTS';

function receivePosts(json){
	return { type: GET_POSTS, posts: json}
}

export function getAllPosts(){
	return dispatch => {
		return getPosts()
			.then(
				json => { 
					dispatch(
						receivePosts(json)
					)
				}
			)
			// .catch(
			// 	error => console.log("Error: ", error)
			// )
	}
	
}