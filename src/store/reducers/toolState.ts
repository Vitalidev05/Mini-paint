import { ToolActionType, IToolState } from '../../const';
import { SET_TOOL, SET_FILL_COLOR, SET_LINE_WIDTH, SET_STROKE_COLOR } from '../actions/actionTypes';

const initialState = {
  tool: undefined,
};

const toolState = (state: IToolState = initialState, action: ToolActionType) => {
  switch (action.type) {
    case SET_TOOL: {
      return {
        ...state,
        tool: action.payload,
      };
    }

    case SET_FILL_COLOR: {
      if (state.tool) {
        state.tool.fillColor = action.payload;
      }
      return state;
    }

    case SET_LINE_WIDTH: {
      if (state.tool) {
        state.tool.lineWidth = action.payload;
      }
      return state;
    }

    case SET_STROKE_COLOR: {
      if (state.tool) {
        state.tool.strokeColor = action.payload;
      }
      return state;
    }

    default:
      return state;
  }
  return state;
};

export default toolState;
