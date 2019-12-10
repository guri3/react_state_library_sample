import { completeLoading } from './app';

// Actions
const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
const CHANGE_TODO_NAME = 'CHANGE_TODO_NAME';
const TOGGLE_TODO_DONE_SUCCESS = 'TOGGLE_TODO_DONE_SUCCESS';
const POST_TODO_SUCCESS = 'POST_TODO_SUCCESS';

// Reducer
const initialState = {
  todoName: '',
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return { ...state, todos: action.todos };
    case CHANGE_TODO_NAME:
      return { ...state, todoName: action.todoName };
    case TOGGLE_TODO_DONE_SUCCESS:
      return { ...state, todos: action.todos };
    case POST_TODO_SUCCESS:
      return { ...state, todos: [...state.todos, action.todo] };
    default:
      return state;
  }
};

export default reducer;

// Action Creators
export const fetchTodosSuccess = todos => {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos
  };
};

export const fetchTodos = () => {
  return dispatch => {
    return fetch('/api/todos')
      .then(res => res.json())
      .then(json => {
        dispatch(fetchTodosSuccess(json));
        dispatch(completeLoading());
      });
  };
};

export const changeTodoName = todoName => {
  return {
    type: CHANGE_TODO_NAME,
    todoName
  };
};

export const toggleTodoDoneSuccess = todos => {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos
  };
};

export const toggleTodoDone = id => {
  return dispatch => {
    const data = { id };
    return fetch('/api/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; cahrset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => dispatch(toggleTodoDoneSuccess(json)));
  };
};

export const postTodoSuccess = todo => {
  return {
    type: POST_TODO_SUCCESS,
    todo
  };
};

export const postTodo = todoName => {
  return dispatch => {
    const data = { name: todoName };
    return fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        dispatch(postTodoSuccess(json));
        dispatch(changeTodoName(''));
      });
  };
};
