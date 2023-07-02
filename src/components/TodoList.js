import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem.js";
import { removeTodo, completedTodo } from "./actionTypes.js";

const TodoList = ({ todo = [], onRemoveTodo, onCompleted }) => (
  <div className="list-wrapper">
    {todo.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onRemoveTodo={onRemoveTodo}
        onCompleted={onCompleted}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveTodo: (text) => dispatch(removeTodo(text)),
  onCompleted: (text) => dispatch(completedTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
