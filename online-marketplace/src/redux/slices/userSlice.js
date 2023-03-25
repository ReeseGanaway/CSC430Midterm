import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      return {
        state: { email: action.payload.email },
      };
    },
    logout() {
      return initialState;
    },
  },
});

export const userActions = user.actions;
