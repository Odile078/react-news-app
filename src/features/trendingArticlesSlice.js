import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API_KEY from "../data/api";
import axios from "axios";
import { nanoid } from "nanoid";

const initialState = {
  isLoading: false,
  trendingArticles: [],
  errors: null,
};

export const fetchTrendingArticles = createAsyncThunk(
  "trendingArticles/fetchTrendingArticles",
  async (_, { rejectWithValue, getState }) => {
    try {
      const category = getState().categories.selectedCategory || "general";

      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?language=en&category=${category}&apiKey=${API_KEY}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
const trendingArticlesSlice = createSlice({
  name: "trendingArticles",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTrendingArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trendingArticles = action.payload.articles
          ?.slice(0, 10)
          ?.map((article, index) => (article = { ...article, id: nanoid() }));
        state.errors = null;
      })
      .addCase(fetchTrendingArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
      });
  },
});

export default trendingArticlesSlice.reducer;
