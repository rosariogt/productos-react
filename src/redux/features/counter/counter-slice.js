import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    amountAdded(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
