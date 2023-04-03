import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import articlesReducer from "./features/articles";
import sourcesReducer from "./features/sources";
import trendingArticlesReducer from "./features/trendingArticles";
import categoriesReducer from "./features/categories";
import logger from "redux-logger";
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    trendingArticle: trendingArticlesReducer,
    articles: articlesReducer,
    sources: sourcesReducer,
    categories: categoriesReducer,
  },
  middleware,
});
export default store;
