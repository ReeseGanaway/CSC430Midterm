import { createSlice, current } from "@reduxjs/toolkit";

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
      action.payload.quantity = 1;
      state.push(action.payload);
    },
    removeProductFromCart(state, action) {
      const index = current(state)
        .map((e) => e.id)
        .indexOf(action.payload.id);
      state.splice(index, 1);
    },
    emptyCart() {
      return initialState;
    },
  },
});

export const { addToCart, removeProductFromCart, emptyCart } = cart.actions;
