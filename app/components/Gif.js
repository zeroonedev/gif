var React = require('react');
import extractGifs from '../extract-gifs';

var Gif = React.createClass({
  getInitialState: function () {
    return {
      currentGifUrl: 'http://i.imgur.com/YlxOOI7.gif',
      gifs: []
    }
  },
  componentDidMount: function () {
    const self = this;
    let index = 0;
    fetch('http://www.reddit.com/r/perfectloops/top.json?sort=top&t=week')
      .then(function (response) {
         return response.json();
      }).then(function (response) {
        self.state.gifs = extractGifs(response.data.children);
    });

    setInterval(() => {
      this.setState({currentGifUrl: this.state.gifs[index]});
      index = (index + 1) % this.state.gifs.length;
    },10000)

  },
  render: function () {
    return (
      <div>
        <img style={imgStyle} src={this.state.currentGifUrl}/>
      </div>
    )
  }
});

var imgStyle = {
  minHeight: "100%",
  minWidth:"100%",
  height: "auto",
  width: "auto",
  position: "absolute",
  top: "-100%",
  bottom: "-100%",
  left: "-100%",
  right: "-100%",
  margin: "auto"
};

module.exports = Gif;