import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem.js";
import { removeTodo, completedTodo } from "./actionTypes.js";

const TodoList = ({ todos = [], loading, onRemoveTodo, onCompleted }) => {
  return (
    <div className="list-wrapper">
      {console.log("hello", todos)}
      {loading ? (
        <div>Loading...</div>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={`todo-${index}`}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onCompleted={onCompleted}
          />
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state ", state);
  return {
    todos: state.todos,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onRemoveTodo: (text) => dispatch(removeTodo(text)),
  onCompleted: (text) => dispatch(completedTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
