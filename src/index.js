import React, { Component } from 'react';
import { render } from 'react-dom';
import R from 'ramda';
import Settings from './settings';

const settings = new Settings();
const renderer = new PIXI.autoDetectRenderer(640, 320);
const stage = new PIXI.Container();

const App = React.createClass({
  componentDidMount: function() {
    document.getElementById('pixi').appendChild(renderer.view);
  },

  render: function() {
    return (<div id="pixi"></div>);
  }
})

const Renderer = React.createClass({
  componentDidMount: function() {
    document.getElementById('pixi').appendChild(renderer.view);
  },

  render: function() {
    return (<div id="pixi"></div>);
  }
});

function Segment(props) {
  this.graphics = new PIXI.Graphics();
  this.graphics.x = props.viewportWidth * props.x;
  this.graphics.y = props.viewportHeight * props.y;
  this.graphics.lineStyle(1, props.color, 1);

  for (let i = 0; i < props.viewportWidth / props.gridSize; i++) {
    this.graphics.moveTo(i * props.gridSize, 0);
    this.graphics.lineTo(i * props.gridSize, props.viewportHeight);
  }

  for (let i = 0; i < props.viewportHeight / props.gridSize; i++) {
    this.graphics.moveTo(0, i * props.gridSize);
    this.graphics.lineTo(props.viewportWidth, i * props.gridSize);
  }
}

const segments = [
  new Segment(Object.assign({}, { x: 0, y: 0, color: 0xFF0000 }, settings)),
  new Segment(Object.assign({}, { x: 1, y: 0, color: 0x444444 }, settings)),
  new Segment(Object.assign({}, { x: -1, y: 0, color: 0x444444 }, settings)),
  new Segment(Object.assign({}, { x: -1, y: -1, color: 0x444444 }, settings)),
  new Segment(Object.assign({}, { x: -1, y: 1, color: 0x444444 }, settings)),
  new Segment(Object.assign({}, { x: 1, y: 1, color: 0x444444 }, settings)),
  new Segment(Object.assign({}, { x: 1, y: -1, color: 0x444444 }, settings)),
  new Segment(Object.assign({}, { x: 0, y: -1, color: 0x444444 }, settings)),
  new Segment(Object.assign({}, { x: 0, y: 1, color: 0x444444 }, settings)),
];

segments.forEach(segment => stage.addChild(segment.graphics));

renderer.render(stage);

render(<App />, document.getElementById('root'));
