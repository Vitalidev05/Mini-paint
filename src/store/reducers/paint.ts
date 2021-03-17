import { PaintActionType } from '../../const';
import { TEST } from '../actions/actionTypes';

const initialState = {
  test: 'asdasd',
};

const paint = (state = initialState, action: PaintActionType) => {
  switch (action.type) {
    case TEST: {
      return {
        ...state,
        test: 'cringe',
      };
    }
    default:
      return state;
  }
  return state;
};

export default paint;
