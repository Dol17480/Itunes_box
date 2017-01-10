var React = require('react');
var TunesSelector = require('../components/TunesSelector');
var TunesDetail = require('../components/TunesDetail');

var TunesContainer = React.createClass({
  getInitialState: function () {
    return { songs: [],
    focusSong: null 
  };
  },
componentDidMount: function () {
  var url = "https://itunes.apple.com/gb/rss/topalbums/limit=10/genre=20/explicit=true/json";
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function (){
    var data = JSON.parse(request.responseText);
  this.setState({
    songs: data, 
    focusSong: data[0]
  });
  }.bind(this);
  request.send(null);
},


  handleClick: function(e){
    e.preventDefault();
    console.log(e, "well done, you can click a button....")
  },

  render: function () {
    return (
      <div>
        <h2>Top Alternative Albums</h2>
        <TunesSelector 
        songs={this.state.songs}
        selectSong={this.setFocusSong}
        />
        <TunesDetail 
        song={this.state.focusSong}
        handleClick={this.handleClick}
        />
      </div>
    );
  },
  setFocusSong: function (song) {
    this.setState({focusSong: song})
  }
});

module.exports = TunesContainer;
