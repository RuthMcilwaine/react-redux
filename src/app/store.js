import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { todosReducer } from "./reducers.js";

const rootReducer = combineReducers({
  todos: todosReducer,
});

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export default store;
