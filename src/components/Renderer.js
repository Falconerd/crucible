import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators';

function Segment({ x, y, color, width, height, gridSize }) {
  this.graphics = new PIXI.Graphics();
  this.graphics.x = width * x;
  this.graphics.y = height * y;
  this.graphics.lineStyle(1, color, 1);

  for (let i = 0; i < width / gridSize; i++) {
    this.graphics.moveTo(i * gridSize, 0);
    this.graphics.lineTo(i * gridSize, height);
  }

  for (let i = 0; i < height / gridSize; i++) {
    this.graphics.moveTo(0, i * gridSize);
    this.graphics.lineTo(width, i * gridSize);
  }
}

const mapStateToProps = state => ({
  gridSize: state.gridSize,
  viewportWidth: state.viewportWidth,
  viewportHeight: state.viewportHeight,
  rendererWidth: state.rendererWidth,
  rendererHeight: state.rendererHeight,
  rendererX: state.rendererX,
  rendererY: state.rendererY,
  entities: state.entities
});

const mapDispatchToProps = dispatch => bindActionCreators({
  scroll: actionCreators.rendererScroll,
  addEntity: actionCreators.addEntity
}, dispatch);

class RendererContainer extends React.Component {
  componentDidMount() {
    const width = this.props.rendererWidth;
    const height = this.props.rendererHeight;
    const gridSize = this.props.gridSize;
    this.renderer = new PIXI.autoDetectRenderer(width, height);
    document.getElementById('renderer').appendChild(this.renderer.view);
    this.stage = new PIXI.Container();
    this.renderer.render(this.stage);

    // SETUP INITIAL GRID
    const segments = [
      new Segment({ x: 0, y: 0, color: 0xFF0000, width, height, gridSize }),
      new Segment({ x: 1, y: 0, color: 0x444444, width, height, gridSize }),
      new Segment({ x: -1, y: 0, color: 0x444444, width, height, gridSize }),
      new Segment({ x: -1, y: -1, color: 0x444444, width, height, gridSize }),
      new Segment({ x: -1, y: 1, color: 0x444444, width, height, gridSize }),
      new Segment({ x: 1, y: 1, color: 0x444444, width, height, gridSize }),
      new Segment({ x: 1, y: -1, color: 0x444444, width, height, gridSize }),
      new Segment({ x: 0, y: -1, color: 0x444444, width, height, gridSize }),
      new Segment({ x: 0, y: 1, color: 0x444444, width, height, gridSize }),
    ];

    segments.forEach(segment => this.props.addEntity(segment));

    let mouseDown = false;

    this.renderer.view.addEventListener('mousedown', () => mouseDown = true);
    this.renderer.view.addEventListener('mouseup', () => mouseDown = false);

    this.renderer.view.addEventListener('mousedown', e => {
      if (mouseDown) this.props.scroll(e.movementX, e.movementY);
    });
  }

  render() {
    return (<div id="renderer"></div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RendererContainer);
