import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import articlesReducer from "./features/articles";
import sourcesReducer from "./features/sources";
import trendingArticlesReducer from "./features/trendingArticles";
import logger from "redux-logger";
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    trendingArticle: trendingArticlesReducer,
    articles: articlesReducer,
    sources: sourcesReducer,
  },
  middleware,
});
export default store;
