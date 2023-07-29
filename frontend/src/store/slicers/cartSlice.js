import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const initialState = {
  itemList: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState: initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const inCart = state.itemList.find((item) => item.id === payload.id);
      if (!inCart) {
        state.itemList.push(payload);
        localStorage.setItem('cartItems', JSON.stringify(state.itemList));
        message.success("Item added to the cart");
      } else {
        message.error("Item already in the cart");
      }
    },
    removeFromCart: (state, { payload }) => {
      state.itemList = state.itemList.filter((item) => item.id !== payload);
      localStorage.setItem('cartItems', JSON.stringify(state.itemList));
    },
  },
});

export default cartReducer.reducer;

export const { addToCart, removeFromCart } = cartReducer.actions;