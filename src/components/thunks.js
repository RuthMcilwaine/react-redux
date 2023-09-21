import {
  fetchTodosSuccess,
  fetchTodosFailure,
  fetchTodosRequest,
} from "../components/actionTypes";
//import todosResponse from "../mappings/data/loadTodosResponse.json";

export const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosRequest());

  try {
    const todosResponse = await fetch("http://localhost:5000/todos");
    dispatch(fetchTodosSuccess(todosResponse));
  } catch (error) {
    dispatch(fetchTodosFailure(error));
  }
};
