import Tool from './Tool';

export default class Line extends Tool {
  name: string;

  mousedown: boolean;

  saved: string;

  currentX: number;

  currentY: number;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen();
    this.name = 'Line';
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
    this.currentX = e.pageX - this.canvas.offsetLeft;
    this.currentY = e.pageY - this.canvas.offsetTop;
    this.context?.moveTo(this.currentX, this.currentY);
    this.saved = this.canvas.toDataURL();
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.mousedown) {
      const currentX = e.pageX - this.canvas.offsetLeft;
      const currentY = e.pageY - this.canvas.offsetTop;
      this.draw(currentX, currentY);
    }
  }

  draw(x: number, y: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.context?.beginPath();
      this.context?.moveTo(this.currentX, this.currentY);
      this.context?.lineTo(x, y);
      this.context?.stroke();
    };
  }
}
