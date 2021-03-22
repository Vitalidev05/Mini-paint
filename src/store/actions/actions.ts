import firebase from 'firebase';
import { Dispatch } from 'react';

import {
  ToolType,
  ColorType,
  IAddPaint,
  IPaint,
  ISavePaint,
  IFirestorePaint,
  IUpdateShare,
  IPublicDrawsByAuthor,
  IPublicDraw,
} from '../../const/index';
import { overrideItemAtIndex } from '../../ulits/arrayUtils';

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
  UPDATE_SHARE,
  SET_PUBLIC_DRAWINGS,
} from './actionTypes';

function updateShare(obj: IUpdateShare) {
  return {
    type: UPDATE_SHARE,
    payload: obj,
  };
}

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

function setPublicDrawings(obj: IPublicDrawsByAuthor[]) {
  return {
    type: SET_PUBLIC_DRAWINGS,
    payload: obj,
  };
}

const setPublicDrawingsAction = () => async (dispatch: Dispatch<any>) => {
  let publicDrawingsArray: IPublicDrawsByAuthor[] = [];
  const data = firebase.firestore().collection('publicDrawings');
  const snapshot = await data.get();

  snapshot.forEach(doc => {
    const { drawingsCount } = doc.data() as { drawingsCount: number };
    publicDrawingsArray = [
      ...publicDrawingsArray,
      {
        author: doc.id,
        drawings: [],
        drawingsCount,
      },
    ];
  });

  const arr = publicDrawingsArray.map(async (x, index) => {
    const { author, drawingsCount } = x;
    const publicDrawingsByAuthor = data.doc(author).collection('drawings');
    const authorSnapshot = await publicDrawingsByAuthor.get();

    let drawingsByAuthor: IPublicDraw[] = [];

    authorSnapshot.forEach(doc => {
      const { paintName, paintUrl } = doc.data() as {
        paintName: string;
        paintUrl: string;
      };

      drawingsByAuthor = [
        ...drawingsByAuthor,
        {
          paintName,
          paintUrl,
          paintId: doc.id,
        },
      ];
    });

    publicDrawingsArray = overrideItemAtIndex(
      publicDrawingsArray,
      {
        author,
        drawings: drawingsByAuthor,
        drawingsCount,
      },
      index,
    );
  });

  await arr[arr.length - 1];

  dispatch(setPublicDrawings(publicDrawingsArray));
};

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
  const paintRef = firebase.firestore().collection('users').doc(uid).collection('paints').doc();
  const paintId = paintRef.id;
  await paintRef.set({ paintName: name, paintUrl: '', isShare: false });
  dispatch(addPaint({ name, id: paintId }));
};

const updatePaint = (uid: string, paintId: string, paintUrl: string) => async (
  dispatch: Dispatch<any>,
) => {
  const paintRef = firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .collection('paints')
    .doc(paintId);
  await paintRef.update({
    paintUrl,
  });
  dispatch(savePaint({ dataUrl: paintUrl, paintId }));
};

const updateShareThunk = (uid: string, isShare: boolean, paintId: string) => async (
  dispatch: Dispatch<any>,
) => {
  const paintRef = firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .collection('paints')
    .doc(paintId);
  await paintRef.update({
    isShare,
  });
  dispatch(updateShare({ isShare, paintId }));
};

const sendDrawingToPublic = (
  name: string,
  paintUrl: string,
  paintId: string,
  paintName: string,
) => async () => {
  const publicPaintAuthorRef = firebase.firestore().collection('publicDrawings').doc(name);
  const publicPaintRef = publicPaintAuthorRef.collection('drawings').doc(paintId);
  const drawings = publicPaintAuthorRef.collection('drawings');

  await publicPaintRef.set({
    paintUrl,
    paintName,
  });

  const drawingsCount = (await drawings.get()).size;

  await publicPaintAuthorRef.set({
    drawingsCount,
  });
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
  updateShare,
  sendDrawingToPublic,
  updateShareThunk,
  setPublicDrawingsAction,
};
