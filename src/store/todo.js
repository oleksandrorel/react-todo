const ADD = 'todo/ADD';
const REMOVE = 'todo/REMOVE';
const EDIT_TITLE = 'todo/EDIT_TITLE';
const EDIT_STATUS = 'todo/EDIT_STATUS';
const EDIT_ALL_STATUSES = 'todo/EDIT_ALL_STATUSES';
const CLEAR_COMPLETED = 'todo/CLEAR_COMPLETED';

export const actions = {
  add: (todo) => ({ type: ADD, todo }),
  remove: (todo) => ({ type: REMOVE, todo }),
  editTitle: (todo, value) => ({ type: EDIT_TITLE, todo, value }),
  editStatus: (todo) => ({ type: EDIT_STATUS, todo }),
  editAllStatuses: (value) => ({ type: EDIT_ALL_STATUSES, value }),
  clearCompleted: () => ({ type: CLEAR_COMPLETED }),
};

const storageTodos = localStorage.getItem('todos');

const initialGoods = storageTodos === null
  ? []
  : JSON.parse(storageTodos || '');

export const todosReducer = (state = initialGoods, action) => {

  switch (action.type) {
    case ADD:
      return [...state, action.todo];

    case REMOVE:
      return state.filter((todo) => todo.id !== action.todo.id);

    case EDIT_TITLE:
      return state.map((todo) => ({
        ...todo,
        title: todo.id === action.todo.id
          ? action.value
          : todo.title,
      }));

    case EDIT_STATUS:
      return state.map((todo) => ({
        ...todo,
        completed: todo.id === action.todo.id
          ? !action.todo.completed
          : todo.completed,
      }));

    case EDIT_ALL_STATUSES:
      return state.map((todo) => ({
        ...todo,
        completed: action.value,
      }));

    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed)

    default:
      return state;
  }
};
