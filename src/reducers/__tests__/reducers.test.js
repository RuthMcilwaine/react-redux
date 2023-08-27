import { CREATE_TODO } from "../../components/actionTypes";
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
});
