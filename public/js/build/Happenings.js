// Main Happenings App Component

/** @jsx React.DOM */

var React = require('react/addons');

var EntryInput = require('./EntryInput.jsx');
var EntryList = require('./EntryList.jsx');

var Happenings = React.createClass({displayName: "Happenings",

	getInitialState: function() {
		return {
			entries: []
		};
	},

	// Create a new entry object from user text input
	handleUserInput: function(text) {
		var date = new Date();
		var newEntry = {date: date.getDate(), text: text};
		this.props.entries.push(newEntry);
		this.updateEntryList();
		console.log(this.props.entries);
	},

	updateEntryList: function() {
		this.setState({entries: this.props.entries});
	},

	render: function() {
		return (
			React.createElement("div", {className: "app"}, 
				React.createElement(EntryInput, {
					handleUserInput: this.handleUserInput}
				), 
				React.createElement(EntryList, {
					entries: this.state.entries, 
					updateEntryList: this.updateEntryList}
				)
			)
		);
	}
});

module.exports = Happenings;