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

export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const fetchTodosSuccess = (text) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: text,
});

export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";
export const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
  payload: error,
});

export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});
