var actions = require('./actions');

var initialHelloState = {message: 'hello from redux initial state'};

var helloReducer = function(state, action) {
    state = state || initialHelloState;
    if(action.type === actions.FETCH_HELLO_SUCCESS) {
      // TODO: add react immutability helpers
      return { message: action.data.message }

    } else if (action.type === actions.FETCH_HELLO_ERROR) {
      console.log(action.error);
    }
    return state;
};



exports.helloReducer = helloReducer;
