import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../reducers/reducers.js";
import thunkMiddleware from "redux-thunk";

const middleware = [thunkMiddleware];

const store = configureStore({
  reducer: todosReducer,
  middleware: middleware,
});

export default store;
