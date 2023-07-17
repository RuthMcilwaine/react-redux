import React from "react";

const TodoItem = ({ todo, onRemoveTodo, onCompleted }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button
          onClick={() => onCompleted(todo.text)}
          className="remove-button"
        >
          Completed
        </button>
        <button
          onClick={() => onRemoveTodo(todo.text)}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
