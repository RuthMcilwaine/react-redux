import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todos: todosReducer,
});

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export default store;
