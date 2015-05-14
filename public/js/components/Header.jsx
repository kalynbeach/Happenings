var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="col-sm-6 header-col">
          <h1>Happenings</h1>
        </div>
        <div className="col-sm-6 header-col">
          <button className="btn btn-default" type="button" onClick={this.props.logState}> Log State</button>
        </div>
      </div>
    );
  }

});

module.exports = Header;