import { CREATE_TODO } from "../../components/actionTypes";
import todosReducer from "../reducers";

describe("todosReducer", () => {
  describe("CREATE_TODO", () => {
    it("should add new todo to list", () => {
      const initialState = {
        loading: false,
        todos: [],
      };

      const action = { type: CREATE_TODO };
      const nextState = todosReducer(initialState, action);

      expect(nextState.todos.length).toBe(1);
    });
  });
});
