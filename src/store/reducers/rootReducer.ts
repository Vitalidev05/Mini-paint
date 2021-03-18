import { combineReducers } from 'redux';

import canvasState from './canvasState';
import privatePaints from './privatePaints';
import toolState from './toolState';

const rootReducer = combineReducers({
  canvasState,
  toolState,
  privatePaints,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
