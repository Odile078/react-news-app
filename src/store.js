import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import articlesReducer from "./features/articlesSlice";
import sourcesReducer from "./features/sourcesSlice";
import categoriesReducer from "./features/categoriesSlice";
import logger from "redux-logger";
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    articles: articlesReducer,
    sources: sourcesReducer,
    categories: categoriesReducer,
  },
  middleware,
});
export default store;
