var React = require('react');

var TunesSelector = React.createClass({
  getInitialState: function () {
    return { selectedIndex: undefined };
  },
  render: function () {
    console.log (this.props)
    var options = this.props.albums.map(function (album, index) {

      return (
        <option 
        value={index} 
        key={index}>{album.title.label}
        </option>)
    });
    return (
      <select 
      id="albums" 
      value={this.state.selectedIndex}
      onChange={this.handleChange}
      >
        {options}
      </select>
    );
  },
  handleChange: function (event) {
    var newIndex = parseInt(event.target.value);
    this.setState({selectedIndex: newIndex});
    var album = this.props.albums[newIndex];
    this.props.selectAlbum(album);
  }
});

module.exports = TunesSelector;
