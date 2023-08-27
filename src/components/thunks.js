import {
  fetchTodosSuccess,
  fetchTodosFailure,
  fetchTodosRequest,
} from "../components/actionTypes";
import todosResponse from "../mappings/data/loadTodosResponse.json";

export const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosRequest());

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    dispatch(fetchTodosSuccess(todosResponse));
  } catch (error) {
    dispatch(fetchTodosFailure(error));
  }
};
