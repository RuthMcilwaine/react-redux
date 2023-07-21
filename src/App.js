import React from "react";
import TodoList from "./components/TodoList.js";
import "./App.css";
import NewTodo from "./components/NewTodo.js";

const App = () => (
  <div className="App">
    <NewTodo />
    <TodoList />
  </div>
);

export default App;
