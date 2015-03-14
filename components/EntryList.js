// Entry List Component

/** @jsx React.DOM */

var EntryList = React.createClass({

	getInitialState: function() {
		return {
			
		};
	},

	render: function() {
		var entryList = this.props.entries.map(function(entry) {
			return <Entry date={entry.date} text={entry.text} />;
		});

		return (
			<div className="row">
				<div className="col-sm-12">
        	<div>{entryList}</div>
        </div>
			</div>
			
		);
	}
});