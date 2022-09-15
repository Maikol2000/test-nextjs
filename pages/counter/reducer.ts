import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlide = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      ++state.value;
    },
    decrement: (state) => {
      --state.value;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlide.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export default counterSlide.reducer;
