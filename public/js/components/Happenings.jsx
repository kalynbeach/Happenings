// Main Happenings App Component

/** @jsx React.DOM */

var React = require('react/addons');

var Header = require('./Header.jsx');
var EntryInput = require('./EntryInput.jsx');
var EntryList = require('./EntryList.jsx');

var Happenings = React.createClass({

	getInitialState: function() {
		return {
			entries: [],
			currentKey: 0
		};
	},

	//
	// Create a new entry object from user text input
	//
	handleUserInput: function(text) {
		var date = this.returnFormattedCurrentDate();

		var newEntry = {
			key: this.state.currentKey,
			date: date,
			text: text
		};

		this.setState({
			entries: this.state.entries.concat(newEntry),
			currentKey: this.state.currentKey + 1
		});
	},

	//
	// Return a MM/DD/YYYY formatted string of the current date
	//
	returnFormattedCurrentDate: function(dateObject) {
		var date = dateObject || new Date(),
				month = date.getMonth() + 1,
				day = date.getDate(),
				year = date.getFullYear();

		var formattedDateString = month + '/' + day + '/' + year;

		return formattedDateString;
	},

	//
	// Console.log the current state
	//
	logState: function() {
		console.log(this.state);
	},

	render: function() {
		return (
			<div className="app">
				<Header
					logState={this.logState}
				/>
				<EntryInput
					handleUserInput={this.handleUserInput}
				/>
				<EntryList
					entries={this.state.entries}
					updateEntryList={this.updateEntryList}
				/>
			</div>
		);
	}
});

module.exports = Happenings;