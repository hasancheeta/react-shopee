import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddTocart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const tempData = { ...action.payload, cartQuantity: 1 };
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        state.cartItems.push(tempData);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddTocart } = cartSlice.actions;

export default cartSlice.reducer;
