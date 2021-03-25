import { PublicPaintsType, IPublicDrawings } from '../../const';
import { SET_PUBLIC_DRAWINGS } from '../actions/actionTypes';

const initialState = {
  publicDraws: [],
};

const publicState = (state: IPublicDrawings = initialState, action: PublicPaintsType) => {
  switch (action.type) {
    case SET_PUBLIC_DRAWINGS: {
      return {
        ...state,
        publicDraws: action.payload,
      };
    }
    default:
      return state;
  }
  return state;
};

export default publicState;
