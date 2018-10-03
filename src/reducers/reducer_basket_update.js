// state argumenet is not application state, only the state this reducer is responsible for.

const initialState = {
	total: 0,
	items: {}
}


export default function(state = initialState, action) {
	switch(action.type) { //care about action
		case 'ITEM_SELECTED':
		// const id = action.payload.id
		// console.log("action payload:", action.payload)
		// if(id in initialState.items) {
		// 	initialState.items[id].count + action.payload.count
		// }
		// // } else {
		// // 	initialState.items[id]
		// // }
		// const result = Object.assign({}, state, {items: action.payload}) //this stops state from mutating. Makes it immutable.
		const result = {...state, items: {...state.items, [action.payload.id]: action.payload}}
		console.log("reducerResult", result)
		return result
	}
	return state //dont care about action
}