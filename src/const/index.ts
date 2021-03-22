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
  DRAW,
  ADD_PAINT,
  SET_PAINT,
  SAVE_PAINT,
  CLEAR_UNDO_REDO,
  UPDATE_SHARE,
  SET_PUBLIC_DRAWINGS,
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

interface IAppState {
  privatePaints: IPaint[];
}

interface IPublicDraw {
  paintName: string;
  paintId: string;
  paintUrl: string;
}

interface IPublicDrawsByAuthor {
  author: string;
  drawings: IPublicDraw[];
  drawingsCount: number;
}

interface IPublicDrawings {
  publicDraws: IPublicDrawsByAuthor[];
}

interface IPaint {
  name: string;
  id: string;
  isShare: boolean;
  dataUrl: string;
}

interface ICanvasState {
  canvasRef: HTMLCanvasElement | null;
  undoList: string[];
  redoList: string[];
  dataUrl: string;
}

type PaintActionType = {
  type: typeof TEST;
};

interface IAddPaint {
  name: string;
  id: string;
}

interface ISetPaint {
  name: string;
  id: string;
  dataUrl: string;
  isShare: boolean;
}

interface IFirestorePaint {
  paintUrl: string;
  paintName: string;
  isShare: boolean;
}

interface ISavePaint {
  dataUrl: string;
  paintId: string;
}

interface IUpdateShare {
  isShare: boolean;
  paintId: string;
}
type PublicPaintsType = {
  type: typeof SET_PUBLIC_DRAWINGS;
  payload: IPublicDrawsByAuthor[];
};

type PrivatePaintsType =
  | {
    type: typeof ADD_PAINT;
    payload: IAddPaint;
  }
  | {
    type: typeof SET_PAINT;
    payload: IPaint[];
  }
  | {
    type: typeof SAVE_PAINT;
    payload: ISavePaint;
  }
  | {
    type: typeof UPDATE_SHARE;
    payload: IUpdateShare;
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
  }
  | {
    type: typeof DRAW;
    payload: string;
  }
  | {
    type: typeof CLEAR_UNDO_REDO;
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
  IAppState,
  PrivatePaintsType,
  IAddPaint,
  ISetPaint,
  IFirestorePaint,
  IPaint,
  ISavePaint,
  IUpdateShare,
  IPublicDrawings,
  IPublicDraw,
  IPublicDrawsByAuthor,
  PublicPaintsType,
};
