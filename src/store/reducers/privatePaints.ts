import { PrivatePaintsType, IAppState } from '../../const';
import { ADD_PAINT } from '../actions/actionTypes';

const initialState = {
  privatePaints: [],
  author: '',
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
            canvas: null,
          },
        ],
      };
    }
    default:
      return state;
  }
  return state;
};

export default privateState;
