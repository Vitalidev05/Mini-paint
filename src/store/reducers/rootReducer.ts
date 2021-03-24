import { combineReducers } from 'redux';

import canvasState from './canvasState';
import privatePaints from './privatePaints';
import publicState from './publicDrawings';
import toolState from './toolState';

const rootReducer = combineReducers({
  canvasState,
  toolState,
  privatePaints,
  publicState,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
