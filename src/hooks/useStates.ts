import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '../store/reducers/rootReducer';

export const useStates: TypedUseSelectorHook<RootState> = useSelector;
