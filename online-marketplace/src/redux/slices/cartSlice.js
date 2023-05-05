import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          state[i].quantity++;
          return;
        }
      }
      console.log(action);
      action.payload.quantity = 1;
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      for (let i = 0; i < state.length; i++) {
        if (state[i] === action.payload) {
          state = state.splice(i, i);
        }
      }
    },
    emptyCart() {
      return initialState;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cart.actions;
