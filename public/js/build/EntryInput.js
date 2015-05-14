// Entry Input Component

/** @jsx React.DOM */

var React = require('react/addons');

var EntryInput = React.createClass({displayName: "EntryInput",

	getInitialState: function() {
		return {
			input: ''
		};
	},

	/*
	* TODO: Fix text input and submit - needs to create entry component upon Enter keyojec
	*/
	handleChange: function(event) {
		event.preventDefault();
		this.setState({input: event.target.value});
	},

	// Take in user text input and create a new entry object via handleUserInput()
	handleSubmit: function(event) {
		event.preventDefault();
		this.props.handleUserInput(this.state.input);
		this.setState({input: ''});
		console.log("Input submitted.");
	},

	render: function() {
		return (
			React.createElement("div", {className: "row"}, 
				React.createElement("div", {className: "col-sm-12"}, 
        	React.createElement("form", {onSubmit: this.handleSubmit}, 
        		React.createElement("input", {
        			type: "text", 
        			className: "entry-input", 
        			placeholder: "What happened today?", 
        			value: this.state.input, 
        			onChange: this.handleChange}
        		)
        	)
        )
			)
		);
	}

});

module.exports = EntryInput;