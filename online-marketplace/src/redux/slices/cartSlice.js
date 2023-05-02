import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      for (i = 0; i < state.length; i++) {
        if (state[i] === action.payload) {
          state = state.splice(i, i);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cart.actions;
