import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import API_KEY from "../data/api";
import { nanoid } from "nanoid";
import { format, startOfWeek } from "date-fns";

const API_KEY = import.meta.env.VITE_API_KEY;
const initialState = {
  isLoading: false,
  articles: [],
  trendingArticles: [],
  weeklyArticles: [],
  selectedArticle: {},
  errors: null,
};
export const fetchTrendingArticles = createAsyncThunk(
  "articles/fetchTrendingArticles",
  async (_, { rejectWithValue, getState }) => {
    try {
      const category = getState().categories.selectedCategory || "general";
      const response = await axios.get(
        `https://news-proxy.netlify.app/api/top-headlines?language=en&category=${category}&apiKey=${API_KEY}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchArticlesBySource = createAsyncThunk(
  "articles/fetchArticlesBySource",
  async (selectedSource, { rejectWithValue, getState }) => {
    try {
      const source = selectedSource || getState().sources.selectedSource.id;
      const response = await axios.get(
        `https://news-proxy.netlify.app/api/everything?language=en&sources=${source}&apiKey=${API_KEY}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchArticlesByWeek = createAsyncThunk(
  "articles/fetchArticlesByWeek",
  async (selectedSource, { rejectWithValue, getState }) => {
    try {
      const source = selectedSource || getState().sources.selectedSource.id;
      const weekStart = format(startOfWeek(new Date()), "yyyy-MM-dd");
      const weekEnd = format(new Date(), "yyyy-MM-dd");

      const response = await axios.get(
        `https://news-proxy.netlify.app/api/everything?language=en&${
          source ? `sources=${source}` : "q=a"
        }&from=${weekStart}&to=${weekEnd}&sortBy=popularity&apiKey=${API_KEY}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const searchArticlesByKeyword = createAsyncThunk(
  "articles/searchArticlesByKeyword",
  async (searchText, { getState, rejectWithValue }) => {
    try {
      const keyword = searchText;
      const response = await axios.get(
        `https://news-proxy.netlify.app/api/everything?language=en&q=${keyword}&apiKey=${API_KEY}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {
    setSelectedArticle: (state, action) => {
      state.selectedArticle = action.payload;
    },
    clearArticles: (state, action) => {
      state.articles = [];
    },
  },
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
      })
      .addCase(fetchArticlesBySource.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticlesBySource.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload.articles
          ?.slice(0, 10)
          ?.map((article, index) => (article = { ...article, id: nanoid() }));
        state.errors = null;
      })
      .addCase(fetchArticlesBySource.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
      })
      .addCase(fetchArticlesByWeek.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticlesByWeek.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weeklyArticles = action.payload.articles
          ?.slice(0, 6)
          ?.map((article, index) => (article = { ...article, id: nanoid() }));
        state.errors = null;
      })
      .addCase(fetchArticlesByWeek.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
      })
      .addCase(searchArticlesByKeyword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchArticlesByKeyword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload.articles
          ?.slice(0, 24)
          ?.map((article, index) => (article = { ...article, id: nanoid() }));
        state.errors = null;
      })
      .addCase(searchArticlesByKeyword.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
      });
  },
});
export const { setSelectedArticle, clearArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
