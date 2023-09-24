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
      const { product, chosenColor, chosenSize, quantity } = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) =>
          item.id === product.id &&
          item?.chosenColor === chosenColor &&
          item?.chosenSize === chosenSize
      );

      if (existingProductIndex !== -1) {
        // If the product already exists, increment the quantity
        state.cart[existingProductIndex].quantity += quantity;
        state.cart[existingProductIndex].total += quantity * product.price;
      } else {
        // If it's a new product, add it to the cart
        state.cart.push({
          ...product,
          chosenColor,
          chosenSize,
          quantity,
          total: quantity * product.price,
        });
      }

      // Update total and quantity for the entire cart
      state.quantity += quantity;
      state.total += quantity * product.price;
    },
    deleteProductFromCart: (state, action) => {
      const { productId } = action.payload;

      // Create a new cart array without the item to be deleted
      state.cart = state.cart.filter((item) => item.id !== productId);

      // Recalculate total and quantity for the entire cart
      state.total = state.cart.reduce((total, item) => total + item.total, 0);
      state.quantity = state.cart.reduce(
        (quantity, item) => quantity + item.quantity,
        0
      );
    },

    emptyCart: (state) => {
      state.cart = [];
      state.quantity = 0;
      state.total = 0;
    },
    incrementQuantityOfProduct: (state, action) => {
      const { product, chosenColor, chosenSize, quantity } = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) =>
          item.id === product.id &&
          item?.chosenColor === chosenColor &&
          item?.chosenSize === chosenSize
      );

      if (existingProductIndex !== -1) {
        // If the product already exists, increment the quantity
        state.cart[existingProductIndex].quantity -= quantity;
        state.cart[existingProductIndex].total -= quantity * product.price;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { addProductToCart, deleteProductFromCart, emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
