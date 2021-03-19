import { Button, ButtonGroup } from '@material-ui/core';
import {
  Brush,
  CropDin,
  RadioButtonUnchecked,
  HowToVote,
  BorderColor,
  Undo,
  Redo,
  Save,
} from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useActions } from '../../../hooks/useActions';
import { useStates } from '../../../hooks/useStates';
import { auth } from '../../../initfirebase';
import BrushClass from '../../../tools/Brush';
import CircleClass from '../../../tools/Circle';
import EraserClass from '../../../tools/Eraser';
import LineClass from '../../../tools/Line';
import RectClass from '../../../tools/Rect';

import InputWidth from './InputWidth';
import style from './Toolbar.scss';

interface IProps {
  id: string;
}

export const Toolbar = (props: IProps) => {
  const [user] = useAuthState(auth);
  const { id } = props;

  const {
    setTool,
    setFillColor,
    setStrokeColor,
    undo,
    redo,
    draw,
    clearUndoRedoLists,
    updatePaint,
  } = useActions();
  const { canvasRef } = useStates(store => store.canvasState);
  const { privatePaints } = useStates(store => store.privatePaints);

  function setBrush() {
    if (canvasRef) {
      setTool(new BrushClass(canvasRef));
    }
  }

  useEffect(() => {
    if (canvasRef) {
      const targetPrivatePaintId = privatePaints.findIndex(x => x.id === id);
      const targetPrivatePaint = privatePaints[targetPrivatePaintId];
      const { dataUrl } = targetPrivatePaint;
      draw(dataUrl);
    }
  }, [canvasRef]);

  useEffect(() => {
    if (canvasRef) {
      clearUndoRedoLists();
      setBrush();
    }
  }, [canvasRef]);

  function setRect() {
    if (canvasRef) {
      setTool(new RectClass(canvasRef));
    }
  }

  function setCircle() {
    if (canvasRef) {
      setTool(new CircleClass(canvasRef));
    }
  }

  function setEraser() {
    if (canvasRef) {
      const eraser = new EraserClass(canvasRef);
      setTool(eraser);
    }
  }

  function setLine() {
    if (canvasRef) {
      setTool(new LineClass(canvasRef));
    }
  }

  function saveState() {
    if (user && canvasRef) {
      updatePaint(user.uid, id, canvasRef.toDataURL());
    }
  }

  return (
    <React.Fragment>
      <div className={style.toolbar}>
        <ButtonGroup>
          <Button variant="contained" onClick={setBrush}>
            <Brush />
          </Button>
          <Button variant="contained" onClick={setRect}>
            <CropDin />
          </Button>
          <Button variant="contained" onClick={setCircle}>
            <RadioButtonUnchecked />
          </Button>
          <Button variant="contained" onClick={setEraser}>
            <HowToVote />
          </Button>
          <Button variant="contained" onClick={setLine}>
            <BorderColor />
          </Button>
          <Button variant="contained">
            <input type="color" onChange={e => setFillColor(e.target.value)} />
          </Button>
        </ButtonGroup>

        <ButtonGroup className={style.buttonGroup}>
          <Button variant="contained" onClick={undo}>
            <Undo />
          </Button>
          <Button variant="contained" onClick={redo}>
            <Redo />
          </Button>
          <Button variant="contained" onClick={saveState}>
            <Save />
          </Button>
        </ButtonGroup>
      </div>
      <div className={style.toolbar1}>
        <InputWidth />
        <div>
          <label htmlFor="stroke-color">
            Stroke color
            <input id="stroke-color" type="color" onChange={e => setStrokeColor(e.target.value)} />
          </label>
        </div>
      </div>
    </React.Fragment>
  );
};
