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

      // Vanilla(Older) Redux => DON'T MUTATE STATE, returning was mandatory
      // const newState = [...state];
      // newState.items.push(action.payload)
      // return newState; 

    // Redux Toolkit  
    // It does not give option to mutate
    // We HAVE to mutate the state 
      state.items.push(action.payload);
    },
    removeItme: (state, action) => {
      state.items.pop();
    },
    // originalState = ["pizza"]
    clearCart: (state, action) => {
        // RTK - either Mutate the existing state or return a new State
      state.items.length = 0; // state =  []
      // return {items: []}; // this new object will be replaced inside originalState = []
    },
  },
});

export const { addItem, removeItme, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
