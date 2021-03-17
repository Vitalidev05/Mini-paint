import { ToolType, ColorType } from '../../const/index';

import {
  SET_REF,
  SET_TOOL,
  SET_FILL_COLOR,
  SET_LINE_WIDTH,
  SET_STROKE_COLOR,
  PUSH_TO_UNDO,
  PUSH_TO_REDO,
  REDO,
  UNDO,
} from './actionTypes';

function redo() {
  return {
    type: REDO,
  };
}

function undo() {
  return {
    type: UNDO,
  };
}

function pushToRedo(data: string) {
  return {
    type: PUSH_TO_REDO,
    payload: data,
  };
}

function pushToUndo(data: string) {
  return {
    type: PUSH_TO_UNDO,
    payload: data,
  };
}

function setTool(tool: ToolType) {
  return {
    type: SET_TOOL,
    payload: tool,
  };
}

function setRef(canvasState: HTMLCanvasElement | null) {
  return {
    type: SET_REF,
    payload: canvasState,
  };
}

function setFillColor(color: ColorType) {
  return {
    type: SET_FILL_COLOR,
    payload: color,
  };
}

function setStrokeColor(color: ColorType) {
  return {
    type: SET_STROKE_COLOR,
    payload: color,
  };
}

function setLineWidth(width: number) {
  return {
    type: SET_LINE_WIDTH,
    payload: width,
  };
}

export {
  setTool,
  setRef,
  setFillColor,
  setStrokeColor,
  setLineWidth,
  pushToRedo,
  pushToUndo,
  redo,
  undo,
};
