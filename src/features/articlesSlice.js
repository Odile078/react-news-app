import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_KEY from "../data/api";
import { nanoid } from "nanoid";
import {
  endOfWeek,
  format,
  lastDayOfWeek,
  startOfDay,
  startOfWeek,
} from "date-fns";

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
        `https://newsapi.org/v2/everything?language=en&sources=${source}&apiKey=${API_KEY}`
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
        `https://newsapi.org/v2/everything?language=en&${
          source ? `sources=${source}` : "q=a"
        }&from=${weekStart}&to=${weekEnd}&sortBy=popularity&apiKey=${API_KEY}`
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
  reducers: {
    setSelectedArticle: (state, action) => {
      state.selectedArticle = action.payload;
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
export const { setSelectedArticle } = articlesSlice.actions;
export default articlesSlice.reducer;
