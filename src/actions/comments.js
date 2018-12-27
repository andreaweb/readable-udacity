import { 
	getComments, 
	createComment,
	editComment,
	voteComment,
	deleteCommentById
} 
from '../API.js';

export const GET_COMMENTS = 'GET_COMMENTS';

function receiveComments(comments){
	return { type: GET_COMMENTS, comments}
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
