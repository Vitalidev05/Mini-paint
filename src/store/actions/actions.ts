import firebase from 'firebase';
import { Dispatch } from 'react';

import {
  ToolType,
  ColorType,
  IAddPaint,
  IPaint,
  ISavePaint,
  IFirestorePaint,
} from '../../const/index';

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
  DELETE_STATE,
  DRAW,
  ADD_PAINT,
  SET_PAINT,
  SAVE_PAINT,
  CLEAR_UNDO_REDO,
} from './actionTypes';

function clearUndoRedoLists() {
  return { type: CLEAR_UNDO_REDO };
}

function savePaint(obj: ISavePaint) {
  return {
    type: SAVE_PAINT,
    payload: obj,
  };
}

function setPaint(obj: IPaint[]) {
  return {
    type: SET_PAINT,
    payload: obj,
  };
}

function addPaint(obj: IAddPaint) {
  return {
    type: ADD_PAINT,
    payload: obj,
  };
}

function draw(str: string) {
  return {
    type: DRAW,
    payload: str,
  };
}

function deleteState() {
  return {
    type: DELETE_STATE,
  };
}

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

const authWithGoogle = (auth: firebase.auth.Auth) => async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  await auth.signInWithPopup(provider);
};

const getDocumentDataByUid = (uid: string) => async (dispatch: Dispatch<any>) => {
  let paintArray: IPaint[] = [];
  const data = firebase.firestore().collection('users').doc(uid).collection('paints');
  const snapshot = await data.get();
  snapshot.forEach(doc => {
    const { paintName, paintUrl, isShare } = doc.data() as IFirestorePaint;
    paintArray = [
      ...paintArray,
      {
        dataUrl: paintUrl,
        id: doc.id,
        isShare,
        name: paintName,
      },
    ];
  });
  dispatch(setPaint(paintArray));
};

const createPaint = (uid: string, name: string) => async (dispatch: Dispatch<any>) => {
  const taskRef = firebase.firestore().collection('users').doc(uid).collection('paints').doc();
  const paintId = taskRef.id;
  await taskRef.set({ paintName: name, paintUrl: '', isShare: false });
  dispatch(addPaint({ name, id: paintId }));
};

const updatePaint = (uid: string, paintId: string, paintUrl: string) => async (
  dispatch: Dispatch<any>,
) => {
  const taskRef = firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .collection('paints')
    .doc(paintId);
  await taskRef.update({
    paintUrl,
  });
  dispatch(savePaint({ dataUrl: paintUrl, paintId }));
};

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
  deleteState,
  draw,
  addPaint,
  setPaint,
  savePaint,
  clearUndoRedoLists,
  getDocumentDataByUid,
  createPaint,
  updatePaint,
  authWithGoogle,
};
