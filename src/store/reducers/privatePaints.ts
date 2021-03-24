import { PrivatePaintsType, IAppState } from '../../const';
import { overrideItemAtIndex } from '../../ulits/arrayUtils';
import { ADD_PAINT, SET_PAINT, SAVE_PAINT, UPDATE_SHARE } from '../actions/actionTypes';

const initialState = {
  privatePaints: [],
};

const privateState = (state: IAppState = initialState, action: PrivatePaintsType) => {
  switch (action.type) {
    case ADD_PAINT: {
      const { id, name } = action.payload;
      return {
        ...state,
        privatePaints: [
          ...state.privatePaints,
          {
            name,
            id,
            isShare: false,
            dataUrl: '',
          },
        ],
      };
    }

    case UPDATE_SHARE: {
      const { isShare, paintId } = action.payload;

      const targetPaintIndex = state.privatePaints.findIndex(x => x.id === paintId);
      const targetPaint = state.privatePaints[targetPaintIndex];

      return {
        ...state,
        privatePaints: overrideItemAtIndex(
          state.privatePaints,
          {
            ...targetPaint,
            isShare,
          },
          targetPaintIndex,
        ),
      };
    }

    case SAVE_PAINT: {
      const { dataUrl, paintId } = action.payload;

      const targetPaintIndex = state.privatePaints.findIndex(x => x.id === paintId);
      const targetPaint = state.privatePaints[targetPaintIndex];

      return {
        ...state,
        privatePaints: overrideItemAtIndex(
          state.privatePaints,
          {
            ...targetPaint,
            dataUrl,
          },
          targetPaintIndex,
        ),
      };
    }

    case SET_PAINT: {
      return {
        ...state,
        privatePaints: action.payload,
      };
    }
    default:
      return state;
  }
  return state;
};

export default privateState;
