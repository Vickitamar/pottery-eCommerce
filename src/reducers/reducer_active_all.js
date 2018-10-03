// state argumenet is not application state, only the state this reducer is responsible for.
export default function(state = null, action) {
	switch(action.type) { //care about action
		case 'ALL_SELECTED':
		return action.payload;
	}
	return state //dont care about action
}