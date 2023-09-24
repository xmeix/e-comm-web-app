import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addProductToWishlist: (state, action) => {
      const existingProductIndex = state.wishlist.findIndex(
        (item) => item.id === action.payload.product.id
      );
      console.log(existingProductIndex);
      if (existingProductIndex === -1) {
        state.wishlist.push(action.payload.product);
      }
    },
    removeFromWishlist: (state, action) => {
      // change id to _id
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.product.id
      );
    },
  },
  extraReducers: (builder) => {},
});

export const { addProductToWishlist, removeFromWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
