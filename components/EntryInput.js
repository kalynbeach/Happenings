// Entry Input Component

/** @jsx React.DOM */

var EntryInput = React.createClass({

	getInitialState: function() {
		return {
			input: ''
		};
	},

	/*
	* TODO: Fix text input and submit - needs to create entry component upon Enter keyojec
	*/
	handleChange: function(event) {
		event.preventDefault();
		this.setState({input: event.target.value});
	},

	// Take in user text input and create a new entry object via handleUserInput()
	handleSubmit: function(event) {
		event.preventDefault();
		this.props.handleUserInput(this.state.input);
		this.setState({input: ''});
		console.log("Input submitted.");
	},

	render: function() {
		return (
			<div className="row">
				<div className="col-sm-12">
        	<form onSubmit={this.handleSubmit}>
        		<input 
        			type="text" 
        			className="entry-input"
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