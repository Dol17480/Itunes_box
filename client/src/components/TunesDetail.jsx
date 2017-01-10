var React = require('react');

var TunesDetail = function (props) {
  if (!props.album) {
    return <h4>No album selected</h4>
  }
  return (
   <h3>
     {props.album.title}
   </h3>
  );
};

module.exports = TunesDetail;

