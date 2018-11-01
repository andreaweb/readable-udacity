import {GET_POSTS} from '../actions/actions.js';

const initialState = {
	posts: []
}

function reducer(state = {posts: []}, action){
	switch(action.type){
		case GET_POSTS:
			return Object.assign({}, state, {
				posts: action.posts
			})				
		default:
			return state
	}
}



export default reducer