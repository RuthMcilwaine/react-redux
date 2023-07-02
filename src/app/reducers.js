import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETED_TODO,
} from "../components/actionTypes.js";

const initialState = {
  todos: [
    { id: 1, text: "Buy groceries" },
    { id: 2, text: "Do laundry" },
    { id: 3, text: "Walk the dog" },
  ],
};

export const todosReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    case COMPLETED_TODO: {
      const { text } = payload;
      return state.map((todo) => {
        if (todo.text === text) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    }
    default:
      return state;
  }
};
