import Tool from './Tool';

export default class Brush extends Tool {
  mousedown: boolean;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
  }

  mouseUpHandler() {
    this.mousedown = false;
  }

  mouseDownHandler(e: MouseEvent) {
    this.mousedown = true;
    this.context?.beginPath();
    const currentX = e.pageX - this.canvas.offsetLeft;
    const currentY = e.pageY - this.canvas.offsetTop;
    this.context?.moveTo(currentX, currentY);
    this.draw(currentX, currentY);
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.mousedown) {
      const currentX = e.pageX - this.canvas.offsetLeft;
      const currentY = e.pageY - this.canvas.offsetTop;
      this.draw(currentX, currentY);
    }
  }

  draw(x: number, y: number) {
    this.context?.lineTo(x, y);
    this.context?.stroke();
  }
}
