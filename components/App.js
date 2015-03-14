// Main App Component

/** @jsx React.DOM */

var App = React.createClass({

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
			<div className="app">
				<EntryInput
					handleUserInput={this.handleUserInput}
				/>
				<EntryList
					entries={this.props.entries}
					updateEntryList={this.updateEntryList}
				/>
			</div>
		);
	}
});

var ENTRIES = [];

React.render(<App entries={ENTRIES} />, document.getElementById('app'));