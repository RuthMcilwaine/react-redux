import {
  COMPLETED_TODO,
  CREATE_TODO,
  // FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  REMOVE_TODO,
} from "../../components/actionTypes";
import todosReducer from "../reducers";

describe("todosReducer", () => {
  describe("CREATE_TODO", () => {
    it("should add new todo to list", () => {
      const state = {
        loading: false,
        todos: [],
      };

      const action = { type: CREATE_TODO };
      const nextState = todosReducer(state, action);

      console.log(nextState.todos);
      expect(nextState.todos.length).toBe(1);
    });
  });

  describe("REMOVE_TODO", () => {
    it("should remove the specified todo from list", () => {
      const state = {
        loading: false,
        todos: [{ text: "Shopping", isCompleted: false }],
      };
      const action = {
        type: REMOVE_TODO,
        payload: { text: "Shopping" },
      };
      const nextState = todosReducer(state, action);

      console.log(nextState.todos);
      expect(nextState.todos.some((todo) => todo.text === "Shopping")).toBe(
        false
      );
    });
  });

  describe("COMPLETED_TODO", () => {
    it("should mark todo as completed", () => {
      const state = {
        loading: false,
        todos: [{ text: "Shopping", isCompleted: false }],
      };
      const action = {
        type: COMPLETED_TODO,
        payload: { text: "Shopping" },
      };
      const nextState = todosReducer(state, action);
      console.log(nextState.todos);

      const completedTodo = nextState.todos.find(
        (todo) => todo.text === "Shopping"
      );
      console.log(completedTodo);
      expect(completedTodo.isCompleted).toBe(true);
    });
  });
});

describe("FETCH_TODOS_SUCCESS", () => {
  it("should update state with todo list when FETCH_TODOS_SUCCESS action is dispatched", () => {
    const state = {
      loading: true,
      todos: [
        { id: 1, text: "Buy groceries", isCompleted: false },
        { id: 2, text: "Do laundry", isCompleted: false },
        { id: 3, text: "Walk the dog", isCompleted: false },
      ],
    };

    const successAction = {
      type: FETCH_TODOS_SUCCESS,
      payload: {
        todos: [{ id: 4, text: "Shopping", isCompleted: false }],
      },
    };

    const newState = todosReducer(state, successAction);

    console.log(successAction.payload.todos);
    console.log(newState);

    expect(newState).toEqual({
      loading: false,
      todos: successAction.payload.todos,
    });
  });
});
