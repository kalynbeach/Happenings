// Entry Component

/** @jsx React.DOM */

var React = require('react/addons');

var Entry = React.createClass({
	
	render: function() {
		return (
			<div className="entry">
				<div className="entry-header">
					<h3>{this.props.date}</h3>
				</div>
				<div className="entry-content">
					<span>{this.props.text}</span>
				</div>
			</div>
		);
		
	}
});

module.exports = Entry;