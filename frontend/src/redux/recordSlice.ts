import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { DaytimeDeath, Night, Player, Sheriff } from 'src/model/Record';

// define the type of state
export type RecordState = {
  type?: string;
  // player: Player[];
  // night: Night[];
  // daytimeDeath: DaytimeDeath[];
  // sheriff?: Sheriff;
};

// define the initial value of state
const initialState: RecordState = {
  type: undefined,
  // player: [],
  // night: [],
  // daytimeDeath: [],
  // sheriff: undefined,
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
    // setPlayer: (state: RecordState, action: PayloadAction<Player[]>) => {
    //   state.player = action.payload;
    //   state.player.sort((a: Player, b: Player) => {
    //     if (Number(a.id) < Number(b.id)) return -1;
    //     if (Number(a.id) > Number(b.id)) return 1;

    //     return 0;
    //   });
    // },
    // setNight: (state: RecordState, action: PayloadAction<Night>) => {
    //   state.night = state.night.concat(action.payload);
    // },
    // setDaytimeDeath: (state: RecordState, action: PayloadAction<DaytimeDeath>) => {
    //   state.daytimeDeath = state.daytimeDeath.concat(action.payload);
    // },
    // setSheriff: (state: RecordState, action: PayloadAction<Sheriff>) => {
    //   state.sheriff = action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setType } = recordSlice.actions;

export default recordSlice.reducer;
