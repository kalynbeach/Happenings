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
			return (<li key={entry.key}>
								<Entry 
									key={entry.key}
									date={entry.date}
									text={entry.text}
								/>
							</li>);	
		});

		return (
			<div className="row">
				<div className="col-sm-12">
        	<ul className="entry-list">
        		{entryListItems}
        	</ul>
        </div>
			</div>
			
		);
	}
});

module.exports = EntryList;