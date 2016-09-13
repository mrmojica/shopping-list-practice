var React = require('react');


var Form = React.createClass({

	onSubmit: function(e){
		e.preventDefault();
		var item = this.refs.input.value;
		this.props.onFormSubmit(item);
		item = '';
	},

	render: function() {

		return (
			<form onSubmit={this.onSubmit}>
				<input type='text' placeholder='Enter Item' ref='input' />
				<button type='submit'>Add Item </button>
			</form>

			);

	}

});


module.exports = Form;