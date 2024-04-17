import { ADD_TASK, UPDATE_TASK, DELETE_TASK,SET_FILTER } from '../actions/actions';

const initialState = {
    tasks: [],
    filter: 'all', // Default filter value
  };
  

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.taskId ? action.payload.updatedTask : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case SET_FILTER:
        return {
            ...state,
            filter: action.payload,
          };
    default:
      return state;
  }
};

export default reducer;
