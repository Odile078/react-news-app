import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  trendingArticles: [],
  errors: null,
};

export const trendingArticlesSlice = createSlice({
  name: "sources",
  initialState: initialState,
  reducers: {
    fetchTrendingArticles: (state, action) => {
      state.isLoading = true;
      //Fetch data function
      //on success and data received save it
      (state.trendingArticles = action.payload),
        //on success and data received save it
        (state.errors = null);
      state.isLoading = false;
    },
  },
});

const { fetchTrendingArticles } = trendingArticlesSlice.actions;
export default trendingArticlesSlice.reducer;
