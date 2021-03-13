import { TestActionType } from '../../const';
import { TEST } from '../actions/actionTypes';

const initialState = {
  test: 'test1',
};

const paint = (state = initialState, action: TestActionType) => {
  switch (action.type) {
    case TEST: {
      return {
        ...state,
        test: 'test2',
      };
    }
    default:
      return state;
  }
  return state;
};

export default paint;
