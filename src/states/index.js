import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, actions) => {
      state.items = actions.payload;
    },
    addToCart: (state, actions) => {
      state.cart = [...state.cart, actions.payload.item];
    },
    removeFromCart: (state, actions) => {
      state.cart = state.cart.filter((item) => item.id !== actions.payload.id);
    },
    increaseCount: (state, actions) => {
      state.cart = state.cart.map((item) => {
        if (item.id === state.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseCount: (state, actions) => {
      state.cart = state.cart.map((item) => {
        if (item.id === state.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;
