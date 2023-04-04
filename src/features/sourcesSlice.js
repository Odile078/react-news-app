import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import API_KEY from "../data/api";
import axios from "axios";
import { nanoid } from "nanoid";
const initialState = {
  isLoading: false,
  sources: [],
  errors: null,
};
// const API_KEY = process.env.REACT_APP_API_KEY;
export const fetchSources = createAsyncThunk(
  "sources/fetchSources",
  async (_, { getState, rejectWithValue }) => {
    try {
      const category = getState().categories.selectedCategory || "general";
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${API_KEY}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
const sourcesSlice = createSlice({
  name: "sources",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSources.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSources.fulfilled, (state, action) => {
        state.isLoading = false;
        state.sources = action.payload?.articles?.map(
          (article, index) =>
            (article = {
              ...article,
              source: { ...article.source, id: nanoid() },
            })
        );
        state.errors = null;
      })
      .addCase(fetchSources.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
      });
  },
});

// export const { fetchSources } = sourcesSlice.actions;
export default sourcesSlice.reducer;
