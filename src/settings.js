export default function(settings) {
  this.viewportWidth = 640;
  this.viewportHeight = 320;
  this.gridSize = 32;

  for (let i in settings) {
    this[i] = settings[i];
  }
}
