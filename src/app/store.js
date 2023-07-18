import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "../reducers/reducers.js";
import { fetchTodos } from "../components/thunks.js";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todos: todosReducer,
});

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

store.dispatch(fetchTodos());
export default store;
