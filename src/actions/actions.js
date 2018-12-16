import { 
	getCategories, 
	getComments, 
	getPosts, 
	getSpecificPost, 
	createPost,
	createComment,
	changePost,
	editComment,
	voteComment,
	votePost,
	deletePostById,
	deleteCommentById
} 
from '../API.js';

export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_POST = 'DELETE_POST';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const GET_RESPONSE = 'GET_RESPONSE';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENT = 'GET_COMMENT';
export const GET_NEW_POST = 'GET_NEW_POST';
export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';

function receivePosts(posts){
	return { type: GET_POSTS, posts}
}
function receivePost(post){
	return { type: GET_POST, post}
}
function confirmDeletion(response){
	return { type: DELETE_POST, response}
}
function receiveResponse(response){
	return { type: GET_RESPONSE, response}
}
function receiveCategories(categories){
	return { type: GET_CATEGORIES, categories}
}
function receiveComments(comments){
	return { type: GET_COMMENTS, comments}
}
function receiveComment(comment){
	return { type: GET_COMMENT, comment}
}

export function addNewComment(comment){
	return dispatch => {
		return createComment(comment)
			.then(
				response => {
					dispatch(getCommentsFromPost(response))
				}
			)
	}
}

export function createNewPost(post){
	return dispatch => {
		return createPost(post)
			.then(
				response => response
			)
	}
}
export function getCommentsFromPost(postID){
	return dispatch => {
		return getComments(postID)
			.then(
				comments => { 
					dispatch(
						receiveComments(comments)
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
	}	
}

export function getPost(postID){
	return dispatch => {
		return getSpecificPost(postID)
			.then(
				post => { 
					dispatch(
						receivePost(post)
					)
				}
			)
	}	
}

export function deletePost(postID){
	return dispatch => {
		return deletePostById(postID)
			.then(
				(response) => {
					dispatch(
						confirmDeletion(response)
					)
				}
			)
	}
}

export function deleteCommentByID(commentID){
	return dispatch => {
		return deleteCommentById(commentID)
		.then(
			response => {
				dispatch(getCommentsFromPost(response))
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

export function voteCommentByID(commentID, option){
	return dispatch => {
		return voteComment(commentID, option)
		.then(
			response => {
				dispatch(getCommentsFromPost(response))
			}
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

export function editCommentByID(commentID, commentBody){
	return dispatch => {
		return editComment(commentID, commentBody)
			.then(
				response => {
					dispatch(getCommentsFromPost(response))
				}
			)
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
	}
	
}