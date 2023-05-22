import { configureStore } from '@reduxjs/toolkit';
import { todos } from '../components/reducers.js'

const store = configureStore({
  reducer: {
    todos: todos,
  },
});

export default store;