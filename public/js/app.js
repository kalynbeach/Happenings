/** @jsx React.DOM */

var React = require('react/addons');

var Happenings = React.createFactory(require('./components/Happenings.jsx'));

var mountNode = document.getElementById('app');

React.render(Happenings({}), mountNode);