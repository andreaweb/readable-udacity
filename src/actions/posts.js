import { 
	getPosts, 
	getSpecificPost, 
	createPost,
	changePost,
	votePost,
	deletePostById
} 
from '../API.js';

export const DELETE_POST = 'DELETE_POST';
export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const REDIRECT = 'REDIRECT';

function receivePosts(posts){
	return { type: GET_POSTS, posts}
}
function receivePost(post){
	return { type: GET_POST, post}
}
function updatePost(post){
	return {type: UPDATE_POST, post}
}
function redirectNotFound(){
	return {type: REDIRECT}
}

export function createNewPost(post){
	return dispatch => {
		return createPost(post)
			.then(
				response => response
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
	}	
}

export function getPost(postID){
	return dispatch => {
		return getSpecificPost(postID)
			.then(
				post => { 
					if(post.title){
						dispatch(
							receivePost(post)
						)
					}else{
						dispatch(
							redirectNotFound()
						)
					}	
				}
			)
	}	
}

export function deletePost(postID){
	return dispatch => {
		return deletePostById(postID)
			.then(
				(response) => {
					dispatch( getAllPosts())
				}
			)
	}
}


export function editPost(postID, postTitle, postBody){
	return dispatch => {
		return changePost(postID, postTitle, postBody)
			.then(
				response => response
			)
	}	
}



export function votePostByID(postID, option){
	return dispatch => {
		return votePost(postID, option)
			.then(
				(post) => { 
					dispatch(
						receivePost(post)
					)
				}
			)
	}	
}

export function votePostInArr(postID, option){
	return dispatch => {
		return votePost(postID, option)
			.then(
				(post) => { 
					console.log(post.voteScore);
					dispatch(
						updatePost(post)
					)
				}
			)
	}	
}