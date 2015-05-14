// Entry Component

/** @jsx React.DOM */

var React = require('react/addons');

var Entry = React.createClass({displayName: "Entry",
	
	getInitialState: function() {
		return {
			date: new Date(),
			text: ''
		};
	},

	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("h3", null, this.props.date), 
				React.createElement("h2", null, this.props.text)
			)
		);
		
	}
});

module.exports = Entry;