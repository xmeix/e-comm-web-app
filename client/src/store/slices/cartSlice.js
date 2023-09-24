import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.quantity += action.payload.quantity;
      state.cart.push({
        product: action.payload.product,
        quantity: action.payload.quantity,
        total: action.payload.quantity * action.payload.product.price,
      });
      state.total += action.payload.quantity * action.payload.product.price;
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

export const { addProductToCart, deleteProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
