var React = require('react');
var TunesSelector = require('../components/TunesSelector');
var TunesDetail = require('../components/TunesDetail');

var TunesContainer = React.createClass({
  getInitialState: function () {
    return { albums: [],
    focusAlbum: null 
  };
  },
componentDidMount: function () {
  var url = "https://itunes.apple.com/gb/rss/topalbums/limit=10/genre=20/explicit=true/json";
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function (){
    var data = JSON.parse(request.responseText);
  this.setState({
    albums: data.feed.entry, 
    focusAlbum: data[0]
  });
  }.bind(this);
  request.send(null);
},


  handleClick: function(e){
    e.preventDefault();
  },

  render: function () {
    return (
      <div>
        <h2>Top Alternative Albums</h2>
        <TunesSelector 
        albums={this.state.albums}
        selectAlbum={this.setFocusAlbum}
        />
        <TunesDetail 
        album={this.state.focusAlbum}
        handleClick={this.handleClick}
        />
      </div>
    );
  },
  setFocusAlbum: function (album) {
    this.setState({focusAlbum: album})
  }
});

module.exports = TunesContainer;
