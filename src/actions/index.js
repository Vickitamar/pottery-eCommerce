export function selectAll(all) {
	// selectBook is an action creator, it needs to return an action, an object with a propery.
	return {
		type: 'ALL_SELECTED',
		payload: all
	};
}

export function selectEat(bowl) {
	// selectBook is an action creator, it needs to return an action, an object with a propery.
	return {
		type: 'EAT_SELECTED',
		payload: bowl
	};
}

export function selectDrink(mug) {
	// selectBook is an action creator, it needs to return an action, an object with a propery.
	return {
		type: 'DRINK_SELECTED',
		payload: mug
	};
}

export function selectDecorate(jug) {
	// selectBook is an action creator, it needs to return an action, an object with a propery.
	return {
		type: 'DECORATE_SELECTED',
		payload: jug
	};
}

export function updateBasket(item) {
	// selectBook is an action creator, it needs to return an action, an object with a propery.
	return {
		type: 'ITEM_SELECTED',
		payload: item
	};
}