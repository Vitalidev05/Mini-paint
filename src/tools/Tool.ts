export default class Tool {
  canvas: HTMLCanvasElement;

  context: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement) {
    const context = canvas.getContext('2d');
    this.canvas = canvas;
    this.context = context;
    // this.color = '#000000';
    this.destroyEvents();
  }

  destroyEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmouseup = null;
    this.canvas.onmousedown = null;
  }

  public set fillColor(color: string | CanvasGradient | CanvasPattern) {
    if (this.context?.fillStyle) {
      this.context.fillStyle = color;
    }
  }

  public set strokeColor(color: string | CanvasGradient | CanvasPattern) {
    if (this.context?.strokeStyle) {
      this.context.strokeStyle = color;
    }
  }

  public set lineWidth(width: number) {
    if (this.context?.lineWidth) {
      this.context.lineWidth = width;
    }
  }
}
