var actions = require('../actions/actions');
var update = require('react-addons-update');

var initialState = {
	todo:[]
};

var reducer = function(state, action) {
	state = state || initialState;
	console.log('action fetch data',action.data);
	console.log('action fetch dataSuccess',actions.fetchDataSuccess);
	if(action.type === actions.FETCH_DATA_SUCCESS) {
		console.log('fetch success data', action.data)
		return {todo: action.data};
	}

	else if(action.type === actions.FETCH_DATA_ERROR) {
		console.log('error', action.error)
		return {error: action.error};
	}

	else if(action.type === actions.FETCH_ADDITEM_SUCCESS) {
		console.log('addItem success data', action.item)
		var newState = update(state, {
			todo: {$push: action.item}
		});

		return newState;
	}

	else if(action.type === actions.FETCH_ADDITEM_ERROR) {
		console.log('error', action.error)
		return {error: action.error};
	}





	return state;

}





module.exports = reducer;