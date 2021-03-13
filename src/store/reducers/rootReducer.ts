import { combineReducers } from 'redux';

import test from './test';

const rootReducer = combineReducers({
  test,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
