import { configureStore, PayloadAction, Store } from '@reduxjs/toolkit';
import recordReducer, { RecordState } from './recordSlice';

let store: Store<RootState>;

export type RootState = {
  record: RecordState;
};

export const configStore = () => {
  store = configureStore({
    reducer: {
      record: recordReducer,
    },
  });

  return store;
};

export const getState = () => store.getState();

export const dispatch = <T>(action: PayloadAction<T>) => store.dispatch(action);
