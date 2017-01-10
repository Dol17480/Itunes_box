var React = require('react');

var TunesDetail = function (props) {
  if (!props.song) {
    return <h4>No song selected</h4>
  }
  return (
   <div className='tunes-detail'>
   <a onClick={props.handleClick} href="">{props.character.name}</a>
   <p>
   <a href={props.character.house}>{props.character.house}</a>
   </p>
   <img src={props.character.image}/>
   </div>
  );
};

module.exports = CharacterDetail;

