var React = require('react');
var ReactDOM = require('react-dom');

var TunesContainer = require('./containers/TunesContainer.jsx');

window.onload = function () {
  ReactDOM.render(
    <TunesContainer />,
    document.getElementById('app')
  );
};
