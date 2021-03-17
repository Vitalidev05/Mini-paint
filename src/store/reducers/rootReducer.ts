import { combineReducers } from 'redux';

import canvasState from './canvasState';
import paint from './paint';
import toolState from './toolState';

const rootReducer = combineReducers({
  paint,
  canvasState,
  toolState,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
