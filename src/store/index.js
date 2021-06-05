import { createStore } from 'redux';
import { todosReducer } from './todo';

const store = createStore(todosReducer);

export const getTodos = (store) => store; 

export default store;