import { createSlice } from "@reduxjs/toolkit";
import { allowedNodeEnvironmentFlags } from "process";

const initialState = {
  //global state
  value: {
    id: 0,
    name: "",
    Address: "",
    status: false,
  },
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setUserDetail: (state, action) => {
      state.value = action.payload;
      return state;
    },
    getUserDetail: (state, action) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setUserDetail,
  getUserDetail,
} = userSlice.actions;

export default userSlice.reducer;
