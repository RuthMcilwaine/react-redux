import {
  COMPLETED_TODO,
  CREATE_TODO,
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
