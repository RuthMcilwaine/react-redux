import {
  fetchTodosSuccess,
  fetchTodosFailure,
  fetchTodosRequest,
} from "../components/actionTypes";
//import todosResponse from "../mappings/data/loadTodosResponse.json";

export const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosRequest());

  try {
    const response = await fetch("http://localhost:5000/todos");
    const data = await response.json();
    dispatch(fetchTodosSuccess(data));
  } catch (error) {
    dispatch(fetchTodosFailure(error));
  }
};
