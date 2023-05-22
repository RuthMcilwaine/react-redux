import React, { useState } from "react";

const TodoItem = ({ todo, onRemoveTodo }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const todoStyle = {
    textDecoration: isChecked ? "line-through" : "none",
  };

  return (
    <div className="todo-item-container">
      <h3 style={todoStyle}>{todo.text}</h3>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <button onClick={() => onRemoveTodo(todo.text)} className="remove-button">
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
