import { createSlice } from "@reduxjs/toolkit";

const categorieSlice = createSlice({
  name: "categorie",
  initialState: {
    categories: [],
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories.push(action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export const { setCategories } = categorieSlice.actions;
export default categorieSlice.reducer;
