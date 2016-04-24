var React = require('react');
import extractGifs from '../extract-gifs';

var GifContainer = React.createClass({
  getInitialState: function () {
    return {
      currentGifUrl: 'http://i.imgur.com/CcCBZoH.gif',
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
        <Gif currentGifUrl={this.state.currentGifUrl} />
      </div>
    )
  }
});

var Gif = React.createClass({
  render: function () {
    return (
      <img style={imgStyle} src={this.props.currentGifUrl}/>
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

module.exports = GifContainer;