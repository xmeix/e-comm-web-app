import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // state.quantity += action.quantity;
      // state.cart.push(action.payload);
      // state.total += action.payload.price * action.payload.amount;
    },
    deleteProduct: (state, action) => {
      // state.quantity -= 1;
      // state.total -= action.payload.price * action.payload.amount;

      // state.cart.splice(
      //   state.cart.findIndex(
      //     (product) => product.newId === action.payload.newId
      //   ),
      //   1
      // );
    },
    emptyCart: (state) => {
      state.cart = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
  extraReducers: (builder) => {},
});

export const { addProduct, deleteProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
