import { getCategories } from '../API.js';

export const GET_RESPONSE = 'GET_RESPONSE'; /*CHECK IF REDUCER DOES ANYTHING*/
export const GET_CATEGORIES = 'GET_CATEGORIES';

function receiveCategories(categories){
	return { type: GET_CATEGORIES, categories}
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