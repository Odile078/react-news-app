import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ],
  selectedCategory: "general",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
