//import { getPosts } from '../API.js';
export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_POST = 'DELETE_POST';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_POST = 'EDIT_POST';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const GET_POSTS = 'GET_POSTS';

const api = process.env.REACT_APP_API_URL

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

function receivePosts(json){
	return { type: GET_POSTS, posts: json}
}

export function getAllPosts(){
	return dispatch => {
		return fetch(`${api}/posts`, { headers })
			    .then(res => res.json())
			   // .then(data => data)
			// .then(
			// 	response => {
			// 		if(!response.ok){
			// 			throw new Error(response)
			// 		}
			// 		return response.json()
			// 	}
			// )
			.then(
				json => { 
					// if(!json){
					// 	throw new Error("Error: Json is ", json)
					// }
					dispatch(
						receivePosts(json)
					)
				}
			)
			// .catch(
			// 	error => console.log("Error: ", error)
			// )
		// .then(
		// 	posts => dispatch(
		// 		{ type: GET_POSTS, posts}
		// 	)
		// )
		// .catch(
		// 	error => console.log("Error: ", error)
		// )
	}
	
}


// export const getPosts = () =>
//   fetch(`${api}/posts`, { headers })
//     .then(res => res.json())
//     .then(data => data)