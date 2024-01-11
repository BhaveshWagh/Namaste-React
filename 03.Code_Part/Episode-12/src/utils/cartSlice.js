import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  // It takes a configuration to create a slice
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // mutating the state here directly
    addItem: (state, action) => {

        // Vanilla(Older ) Redux => DON'T MUTATE STATE
        // const newState
      state.items.push(action.payload);
    },
    removeItme: (state, action) => {
      state.items.pop();
    },
    clearCart: (state,action) => {
      state.items.length = 0; // []
    },
  },
});

export const {addItem, removeItme, clearCart } = cartSlice.actions;
export default cartSlice.reducer