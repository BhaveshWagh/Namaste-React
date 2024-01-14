import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  // add Slices
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
