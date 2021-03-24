import Tool from './Tool';

export default class Rect extends Tool {
  mousedown: boolean;

  startX: number;

  startY: number;

  saved: string;

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
    this.startX = e.pageX - this.canvas.offsetLeft;
    this.startY = e.pageY - this.canvas.offsetTop;
    this.saved = this.canvas.toDataURL();
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.mousedown) {
      const currentX = e.pageX - this.canvas.offsetLeft;
      const currentY = e.pageY - this.canvas.offsetTop;
      const width = currentX - this.startX;
      const height = currentY - this.startY;
      const r = Math.sqrt(width ** 2 + height ** 2);
      this.draw(this.startX, this.startY, r);
    }
  }

  draw(x: number, y: number, r: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.context?.beginPath();
      this.context?.arc(x, y, r, 0, 2 * Math.PI);
      this.context?.fill();
      this.context?.stroke();
    };
  }
}
