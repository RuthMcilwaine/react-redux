import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from "./actionTypes";
import todosData from "../mappings/data/loadTodosResponse.json";

export const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosRequest());

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    dispatch(fetchTodosSuccess(todosData));
  } catch (error) {
    dispatch(fetchTodosFailure(error));
  }
};

const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});

const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
  payload: error,
});
