import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player } from 'src/model/Record';

// define the type of state
export type RecordState = {
  type?: string;
  player?: Player[];
};

// define the initial value of state
const initialState: RecordState = {
  type: undefined,
  player: undefined,
};

/**
 * define the actions in "reducers"
 * [action]:(state,action<T>)
 * state 為 action 被執行時當下的 state
 * action.payload 為傳入 action 的參數
 * 定義 action 的同時亦需定義傳入之參數的 type 於 T
 * action 只有 dispatch 才能執行
 */
export const recordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {
    setType: (state: RecordState, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setPlayer: (state: RecordState, action: PayloadAction<Player[]>) => {
      state.player = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setType, setPlayer } = recordSlice.actions;

export default recordSlice.reducer;
