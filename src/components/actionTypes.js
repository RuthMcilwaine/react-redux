export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const COMPLETED_TODO = "COMPLETED_TODO";
export const completedTodo = (text) => ({
  type: COMPLETED_TODO,
  payload: { text },
});

export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const fetchTodosSuccess = (text) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: { text },
});

export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";
export const fetchTodosFailure = (text) => ({
  type: FETCH_TODOS_FAILURE,
  payload: { text },
});

export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const fetchTodosRequest = (text) => ({
  type: FETCH_TODOS_REQUEST,
  payload: { text },
});
