var FETCH_HELLO_SUCCESS = 'FETCH_HELLO_SUCCESS';
var fetchHelloSuccess = function(data) {
    return {
        type: FETCH_HELLO_SUCCESS,
        data: data
    };
};

var FETCH_HELLO_ERROR= 'FETCH_HELLO_ERROR';
var fetchHelloError = function(error) {
    return {
        type: FETCH_HELLO_ERROR,
        error: error
    };
};

var fetchData = function() {
    return function(dispatch) {
        var url = 'http://localhost:3000/api/hello';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return dispatch(
                fetchHelloSuccess(data)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchHelloError(error)
            );
        });
    }
};

exports.fetchData = fetchData;
exports.FETCH_HELLO_SUCCESS = FETCH_HELLO_SUCCESS;
exports.fetchHelloSuccess = fetchHelloSuccess;
exports.FETCH_HELLO_ERROR = FETCH_HELLO_ERROR;
exports.fetchHelloError = fetchHelloError;
