import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  errors: null,
};

const articlesSlice = createSlice({
  name: "sources",
  initialState: initialState,
  reducers: {
    fetchArticles: (state, action) => {
      state.isLoading = true;
      //Fetch data function
      //on success and data received save it
      (state.articles = action.payload),
        //on success and data received save it
        (state.errors = null);
      state.isLoading = false;
    },
  },
});

export const { fetchArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
