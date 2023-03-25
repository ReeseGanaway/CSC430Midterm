import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", type: "shirt", name: "Black Tee" },
  { id: "2", type: "shirt", name: "White Tee" },
];

export const products = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
  },
});

export const productActions = products.actions;
