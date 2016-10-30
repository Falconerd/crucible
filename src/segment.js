export default class Segment {
  constructor(x, y, color, viewportWidth, viewportHeight, gridSize) {
    this.graphics = new PIXI.Graphics();
    this.graphics.x = viewportWidth * x;
    this.graphics.y = viewportHeight * y;
    this.graphics.lineStyle(1, color, 1);

    for (let i = 0; i < viewportWidth / gridSize; i++) {
      this.graphics.moveTo(i * gridSize, 0);
      this.graphics.lineTo(i * gridSize, viewportHeight);
    }

    for (let i = 0; i < viewportHeight / gridSize; i++) {
      this.graphics.moveTo(0, i * gridSize);
      this.graphics.lineTo(viewportWidth, i * gridSize);
    }
  }
}
