import Brush from './Brush';

export default class Eraser extends Brush {
  color: string | CanvasGradient | CanvasPattern | undefined = this.context?.strokeStyle;

  draw(x: number, y: number) {
    if (this.context?.strokeStyle) {
      this.context.strokeStyle = 'white';
    }
    this.context?.lineTo(x, y);
    this.context?.stroke();
    if (this.context?.strokeStyle && this.color) {
      this.context.strokeStyle = this.color;
    }
  }
}
