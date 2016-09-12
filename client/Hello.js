var React = require('react');
var connect = require('react-redux').connect;

var actions = require('./actions');

var Hello = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(actions.fetchData());
  },
  render: function() {
    return (
        <div>{this.props.message}</div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        message: state.message
    };
};

var Container = connect(mapStateToProps)(Hello);

module.exports = Container;
