import {GET_POSTS} from '../actions/actions.js';

function reducer(state = initialState, action){
	switch(action.type){
		case GET_POSTS:
			const {posts} = action;
			return {
				posts
			}
	}
}

const initialState = {
	posts: []
}

export default reducer