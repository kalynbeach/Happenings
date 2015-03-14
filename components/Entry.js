// Entry Component

/** @jsx React.DOM */

var Entry = React.createClass({
	
	getInitialState: function() {
		return {
			date: new Date(),
			text: ''
		};
	},

	render: function() {
		return (
			<div>
				<h3>{this.props.date}</h3>
				<h2>{this.props.text}</h2>
			</div>
		);
		
	}
});