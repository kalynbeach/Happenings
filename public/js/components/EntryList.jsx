// Entry List Component

/** @jsx React.DOM */

var React = require('react/addons');

var Entry = require('./Entry.jsx');

var EntryList = React.createClass({

	getInitialState: function() {
		return {

		};
	},

	render: function() {
		var entryListItems = this.props.entries.map(function(entry) {
			return (<li value={entry.key} key={entry.key}>
								<Entry 
									key={entry.key}
									date={entry.date}
									text={entry.text}
								/>
							</li>);	
		});

		// Reverse the order of list item elements in the array so that the list stacks upward
		entryListItems.reverse();

		return (
			<div className="row">
				<div className="col-sm-12">
        	<ol className="entry-list">
        		{entryListItems}
        	</ol>
        </div>
			</div>
			
		);
	}
});

module.exports = EntryList;