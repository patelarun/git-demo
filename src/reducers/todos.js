import {
  SET_TODO,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  SET_UPDATING_TODO_INDEX,
} from '../actions';

const getTodoRecordsFromLocalStorage = () => {
  const recordsJsonString = localStorage.getItem('todoRecords') || '[]'; ;
  return JSON.parse(recordsJsonString);
};

const initialState = {
  todo: { title: '', description: '' },
  records: getTodoRecordsFromLocalStorage(),
  updatingTodoIndex: null,
}

const setRecordsOnLocalStorage = (records = []) => {
  const recordsJsonString = JSON.stringify(records);
  localStorage.setItem('todoRecords', recordsJsonString);
}

export default function todos (state = initialState, action) {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case SET_UPDATING_TODO_INDEX:
      return {
        ...state,
        updatingTodoIndex: action.payload,
        todo: { ...state.records[action.payload] },
      };
    case ADD_TODO: {
      const records = [...state.records, action.payload];
      setRecordsOnLocalStorage(records);
      return {
        ...state,
        records,
        todo: initialState.todo,
      };
    }
    case UPDATE_TODO: {
      const records = [...state.records];
      records[state.updatingTodoIndex] = action.payload;
      setRecordsOnLocalStorage(records);
      return {
        ...state,
        records,
        todo: initialState.todo,
        updatingTodoIndex: null,
      };
    }
    case COMPLETE_TODO: {
      const records = state.records.map((todo) => {
        if (todo.id !== action.payload.todoId) return todo;
        return { ...todo, completed: action.payload.completed };
      });
      setRecordsOnLocalStorage(records);
      return {
        ...state,
        records,
      };
    }
    case DELETE_TODO: {
      const records = state.records.filter((todo) => todo.id !== action.payload);
      setRecordsOnLocalStorage(records);
      return {
        ...state,
        records,
      };
    }
    default:
      return state;
  }
}
