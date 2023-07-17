import {
    LOAD_TODOS,
  } from '../Intents';

  import loadTodosResponse from './data/loadTodosResponse.json';

  const loadTodos = ({ onSuccess }) => {
    onSuccess(loadTodosResponse);
  };

  const MemoryInventoryMapping = {

    [LOAD_TODOS]: loadTodos,

  };
  
  export default MemoryInventoryMapping;
