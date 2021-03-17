import {
  TEST,
  SET_REF,
  SET_TOOL,
  SET_STROKE_COLOR,
  SET_LINE_WIDTH,
  SET_FILL_COLOR,
  PUSH_TO_REDO,
  PUSH_TO_UNDO,
  REDO,
  UNDO,
} from '../store/actions/actionTypes';
import Brush from '../tools/Brush';
import Circle from '../tools/Circle';
import Eraser from '../tools/Eraser';
import Line from '../tools/Line';
import Rect from '../tools/Rect';

type ToolType = Brush | Rect | Circle | Eraser | Line;

type ColorType = string | CanvasGradient | CanvasPattern;

interface IToolState {
  tool?: ToolType;
}

interface ICanvasState {
  canvasRef: HTMLCanvasElement | null;
  undoList: string[];
  redoList: string[];
}

type PaintActionType = {
  type: typeof TEST;
};

type CanvasActionType =
  | {
    type: typeof SET_REF;
    payload: HTMLCanvasElement | null;
  }
  | {
    type: typeof PUSH_TO_REDO;
    payload: string;
  }
  | {
    type: typeof PUSH_TO_UNDO;
    payload: string;
  }
  | {
    type: typeof REDO;
  }
  | {
    type: typeof UNDO;
  };

type ToolActionType =
  | {
    type: typeof SET_TOOL;
    payload: ToolType;
  }
  | {
    type: typeof SET_LINE_WIDTH;
    payload: number;
  }
  | {
    type: typeof SET_FILL_COLOR;
    payload: ColorType;
  }
  | {
    type: typeof SET_STROKE_COLOR;
    payload: ColorType;
  };

export {
  PaintActionType,
  CanvasActionType,
  ToolActionType,
  ToolType,
  IToolState,
  ColorType,
  ICanvasState,
};
