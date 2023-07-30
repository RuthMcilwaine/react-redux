import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETED_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from "../components/actionTypes.js";
import todosResponse from "../mappings/data/loadTodosResponse.json";

const initialState = {
  loading: false,
  todos: todosResponse.todos || [],
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
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.text !== text),
      };
    }
    case COMPLETED_TODO: {
      const { text } = payload;
      return state.todos.map((todo) => {
        if (todo.text === text) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    }
    case FETCH_TODOS_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_TODOS_SUCCESS:
      return { ...state, todos: payload, loading: false };
    case FETCH_TODOS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

//export default todosReducer;//
