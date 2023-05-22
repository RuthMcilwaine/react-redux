import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";
import { removeTodo } from "./actionTypes";

const TodoList = ({ todos = [], onRemoveTodo, isCompleted }) => (
  <div className="list-wrapper">
    <NewTodo />
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onRemoveTodo={onRemoveTodo}
        isCompleted={isCompleted}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveTodo: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
