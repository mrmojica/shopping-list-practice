var actions = require('../actions/actions');

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

	return state;

}





module.exports = reducer;