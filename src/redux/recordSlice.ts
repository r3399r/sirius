import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type RecordState = {
  type?: string;
};

const initialState: RecordState = {
  type: undefined,
};

export const recordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {
    setType: (state: RecordState, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setType } = recordSlice.actions;

export default recordSlice.reducer;
