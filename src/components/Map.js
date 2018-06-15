import React, { Component } from 'react';

import '../App.css';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 'map.png',
      zoomLevel: 0,
    };
  }
  // TODO make this not suck
  onClick = (e) => {
    let width = e.screenX / window.innerWidth * 100;
    let nextZoomLevel = this.state.zoomLevel + 1;
    let nextImage = this.state.image;

    if (nextZoomLevel === 1) {
      if (width >= 0 && width < 33) {
        nextImage = 'map_l.png';
      }
      if (width >= 33 && width < 66) {
        nextImage = 'map_c.png';
      }
      if (width > 66) {
        nextImage = 'map_r.png';
      }
    }

    if (nextZoomLevel === 2) {
      e.target.classList.add('map-img-reset');
    }

    // reset
    if (nextZoomLevel >= 3) {
      nextZoomLevel = 0;
      nextImage = 'map.png';
      e.target.classList.remove('map-img-reset');
    }

    this.setState({
      image: nextImage,
      zoomLevel: nextZoomLevel,
    });
  };

  render() {
    console.log();
    const mapImage = require(`../img/map/zoom_${this.state.zoomLevel}/${
      this.state.image
    }`);
    return (
      <div
        onClick={(e) => this.onClick(e)}
        className="map-img"
        style={{ backgroundImage: `url(${mapImage})` }}
      />
    );
  }
}
