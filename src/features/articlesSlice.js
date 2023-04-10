import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_KEY from "../data/api";
import { nanoid } from "nanoid";

const initialState = {
  isLoading: false,
  articles: [],
  errors: null,
};
export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (_, { getState, rejectWithValue }) => {
    try {
      const category = getState().categories.selectedCategory || "general";
      const response = await axios.get(
        `https://newsapi.org/v2/everything?language=en&category=${category}&apiKey=${API_KEY}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const searchArticles = createAsyncThunk(
  "articles/searchArticles",
  async (searchUrl, { getState, rejectWithValue }) => {
    try {
      const response = await axios.get(searchUrl);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const searchArticlesByKeyword = (searchText) => {
  const keyword = searchText;
  const searchByKeywordUrl = `https://newsapi.org/v2/everything?language=en&q=${keyword}&apiKey=${API_KEY}`;
  searchArticles(searchByKeywordUrl);
};
export const searchArticlesBySource = (selectedSource) => {
  // const selectedSource = getState().sources.selectedSource;
  const searchBySourceUrl = `https://newsapi.org/v2/everything?language=en&source=${selectedSource}&apiKey=${API_KEY}`;
  searchArticles(searchBySourceUrl);
};
export const searchArticlesBySourceAndKeyword = (
  selectedSource,
  searchText
) => {
  // const selectedSource = getState().sources.selectedSource;
  const keyword = searchText;
  const searchBySourceUrl = `https://newsapi.org/v2/everything?language=en&source=${selectedSource}&apiKey=${API_KEY}`;
  searchArticles(searchBySourceUrl);
};
const articlesSlice = createSlice({
  name: "articles",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload.articles
          ?.slice(0, 10)
          ?.map((article) => (article = { ...article, id: nanoid() }));
        state.errors = null;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
      })
      .addCase(searchArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload.articles
          ?.slice(0, 10)
          ?.map((article, index) => (article = { ...article, id: nanoid() }));
        state.errors = null;
      })
      .addCase(searchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
      });
  },
});

export default articlesSlice.reducer;
