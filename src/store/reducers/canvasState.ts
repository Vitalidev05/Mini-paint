import { CanvasActionType, ICanvasState } from '../../const';
import { SET_REF, PUSH_TO_REDO, PUSH_TO_UNDO, REDO, UNDO, DRAW } from '../actions/actionTypes';

const initialState = {
  canvasRef: null,
  undoList: [],
  redoList: [],
  dataUrl: '',
};

const canvasState = (state: ICanvasState = initialState, action: CanvasActionType) => {
  switch (action.type) {
    case SET_REF: {
      return {
        ...state,
        canvasRef: action.payload,
      };
    }

    case PUSH_TO_REDO: {
      return {
        ...state,
        redoList: [...state.redoList, action.payload],
      };
    }

    case PUSH_TO_UNDO: {
      return {
        ...state,
        undoList: [...state.undoList, action.payload],
      };
    }

    case DRAW: {
      if (state.canvasRef) {
        const canvas: CanvasRenderingContext2D | null = state.canvasRef.getContext('2d');

        const width = state.canvasRef?.width;
        const height = state.canvasRef?.height;
        const img = new Image();
        const dataUrl = '';
        img.src = dataUrl;

        img.onload = () => {
          if (canvas?.clearRect && canvas?.drawImage) {
            canvas.clearRect(0, 0, width, height);
            canvas.drawImage(img, 0, 0, width, height);
          }
        };
      }

      return {
        ...state,
      };
    }

    case REDO: {
      if (state.canvasRef) {
        const canvas: CanvasRenderingContext2D | null = state.canvasRef.getContext('2d');

        const width = state.canvasRef?.width;
        const height = state.canvasRef?.height;

        if (state.redoList.length > 0 && state.canvasRef) {
          const dataUrl = state.redoList.pop();
          state.undoList.push(state.canvasRef.toDataURL());
          const img = new Image();

          if (dataUrl) {
            img.src = dataUrl;
          }

          img.onload = () => {
            if (canvas?.clearRect && canvas?.drawImage) {
              canvas.clearRect(0, 0, width, height);
              canvas.drawImage(img, 0, 0, width, height);
            }
          };
        } else {
          canvas?.clearRect(0, 0, width, height);
        }
      }
      return {
        ...state,
      };
    }

    case UNDO: {
      if (state.canvasRef) {
        const canvas: CanvasRenderingContext2D | null = state.canvasRef.getContext('2d');

        const width = state.canvasRef?.width;
        const height = state.canvasRef?.height;

        if (state.undoList.length > 0 && state.canvasRef) {
          const dataUrl = state.undoList.pop();
          state.redoList.push(state.canvasRef.toDataURL());
          const img = new Image();

          if (dataUrl) {
            img.src = dataUrl;
          }

          img.onload = () => {
            if (canvas?.clearRect && canvas?.drawImage) {
              canvas.clearRect(0, 0, width, height);
              canvas.drawImage(img, 0, 0, width, height);
            }
          };
        } else {
          canvas?.clearRect(0, 0, width, height);
        }
      }
      return {
        ...state,
      };
    }

    default:
      return state;
  }
  return state;
};

export default canvasState;
