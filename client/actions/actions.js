require('isomorphic-fetch');

var FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
var fetchDataSuccess = function(data) {
    return {
        type:FETCH_DATA_SUCCESS,
        data: data
    };
};

var FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
var fetchDataError = function(error) {
    return {
        type:FETCH_DATA_ERROR,
        error: error
    };
};

var fetchData = function() {
    return function(dispatch) {
        var url = 'http://localhost:8080/data';
    return fetch(url).then(function(response) {
            if(response.status < 200 || response.status > 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response.json();
        })
        .then(function(data) {
            console.log('Data', data)
            return dispatch(
                fetchDataSuccess(data)
                );

        })
        .catch(function(error) {
            return dispatch(
                fetchDataError(error)
                );

        });


    }

};

var FETCH_ADDITEM_SUCCESS = 'FETCH_ADDITEM_SUCCESS';
var fetchAddItemSuccess = function(item) {
    return {
        type:FETCH_ADDITEM_SUCCESS,
        item: item
    };
};

var FETCH_ADDITEM_ERROR = 'FETCH_ADDITEM_ERROR';
var fetchAddItemError = function(error) {
    return {
        type:FETCH_ADDITEM_ERROR,
        error: error
    };
};



var addItem = function() {
    return function(dispatch) {
        var url = 'http://localhost:8080/data';
    return fetch(url,
    {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            item: item
        })

    }
        ).then(function(response) {
            if(response.status < 200 || response.status > 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response.json();
        })
        .then(function(data) {
            console.log('Data', data)
            return dispatch(
                fetchAddItemSuccess()
                );

        })
        .catch(function(error) {
            return dispatch(
                fetchAddItemError(error)
                );

        });


    }

};





exports.fetchData = fetchData;
exports.fetchDataSuccess =fetchDataSuccess;
exports.FETCH_DATA_SUCCESS = FETCH_DATA_SUCCESS;
exports.fetchDataError = fetchDataError;
exports.FETCH_DATA_ERROR = FETCH_DATA_ERROR;


exports.addItem = addItem;
exports.fetchAddItemSuccess =fetchAddItemSuccess;
exports.FETCH_ADDITEM_SUCCESS = FETCH_ADDITEM_SUCCESS;
exports.fetchAddItemError = fetchAddItemError;
exports.FETCH_ADDITEM_ERROR = FETCH_ADDITEM_ERROR;












