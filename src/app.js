import React, { Component } from 'react';
import Settings from './settings';
import Segment from './segment';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.renderer = new PIXI.autoDetectRenderer(640, 320);
    this.stage = new PIXI.Container();
    this.settings = new Settings();
  }

  componentDidMount() {
    // Perhaps a better way of doing this? Unsure...
    document.getElementById('pixi').appendChild(this.renderer.view);

    this.segments = [
      new Segment(0, 0, 0xFF0000, this.settings.viewportWidth, this.settings.viewportHeight, this.settings.gridSize),
      new Segment(1, 0, 0x444444, this.settings.viewportWidth, this.settings.viewportHeight, this.settings.gridSize),
      new Segment(-1, 0, 0x444444, this.settings.viewportWidth, this.settings.viewportHeight, this.settings.gridSize),
      new Segment(-1, -1, 0x444444, this.settings.viewportWidth, this.settings.viewportHeight, this.settings.gridSize),
      new Segment(-1, 1, 0x444444, this.settings.viewportWidth, this.settings.viewportHeight, this.settings.gridSize),
      new Segment(1, 1, 0x444444, this.settings.viewportWidth, this.settings.viewportHeight, this.settings.gridSize),
      new Segment(1, -1, 0x444444, this.settings.viewportWidth, this.settings.viewportHeight, this.settings.gridSize),
      new Segment(0, -1, 0x444444, this.settings.viewportWidth, this.settings.viewportHeight, this.settings.gridSize),
      new Segment(0, 1, 0x444444, this.settings.viewportWidth, this.settings.viewportHeight, this.settings.gridSize),
    ];

    this.segments.forEach(segment => this.stage.addChild(segment.graphics));

    this.renderer.render(this.stage);
  }

  componentDidUpdate() {
    this.renderer.render(this.stage);
  }

  render() {
    return (
      <div id="pixi">
      </div>
    );
  }
}
