var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var store = require('./store');
var Provider = require('react-redux').Provider;
var actions = require('./actions/actions');



var App = React.createClass({

	componentWillMount: function() {
		console.log('before dispatch', this.props.data);
		this.props.dispatch(actions.fetchData());
		console.log('after dispatch', this.props.data);
	},


	render: function() {
		console.log("render", this.props.data)

		var list = this.props.data.map(function(value) {
			return (
				<li key={value.id}>{value.item}</li>
			)
		})

		return (
			<div>
				<ul>
					{list}
				</ul>
			</div>

			)


	}


});

var mapStateToProps = function(state, props) {
	return {
		data: state.todo

	};


};

var Container = connect(mapStateToProps)(App);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
    	<Provider store={store}>
    	<Container />
    	</Provider>, document.getElementById('app'));
});