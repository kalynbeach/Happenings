// Entry Input Component

/** @jsx React.DOM */

var React = require('react/addons');

var EntryInput = React.createClass({

	getInitialState: function() {
		return {
			input: ''
		};
	},

	/*
	* TODO: Fix text input and submit - needs to create entry component upon Enter key
	*/
	handleChange: function(event) {
		event.preventDefault();
		this.setState({input: event.target.value});
	},

  //
	// Take in user text input and create a new entry object via handleUserInput()
  //
	handleSubmit: function(event) {
		event.preventDefault();
		this.props.handleUserInput(this.state.input);
		this.setState({input: ''});

    // TESTING
		console.log("Input submitted.");
	},

	render: function() {
		return (
			<div className="row">
				<div className="col-sm-12">
        	<form onSubmit={this.handleSubmit}>
        		<input 
        			type="text" 
        			className="form-control entry-input"
        			placeholder="What happened today?"
        			value={this.state.input}
        			onChange={this.handleChange}
        		/>
        	</form>
        </div>
			</div>
		);
	}

});

module.exports = EntryInput;