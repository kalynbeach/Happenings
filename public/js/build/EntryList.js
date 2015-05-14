// Entry List Component

/** @jsx React.DOM */

var React = require('react/addons');

var Entry = React.createFactory(require('./Entry.jsx'));

var EntryList = React.createClass({displayName: "EntryList",

	getInitialState: function() {
		return {
			
		};
	},

	render: function() {
		var entryList = this.props.entries.map(function(entry) {
			return React.createElement(Entry, {date: entry.date, text: entry.text});
		});

		return (
			React.createElement("div", {className: "row"}, 
				React.createElement("div", {className: "col-sm-12"}, 
        	React.createElement("div", null, entryList)
        )
			)
			
		);
	}
});

module.exports = EntryList;