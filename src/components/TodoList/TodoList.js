import React from 'react';
import { useLocation } from 'react-router-dom';
import { TodoItem } from '../TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../../store/index';
import { actions } from '../../store/todo';
import './TodoList.scss'

export const TodoList = () => {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();
  const todosStatus = todos.every(todo => todo.completed);
  const { pathname } = useLocation();

  const changeTodosStatus = (value) => {
    dispatch(actions.editAllStatuses(value))
  };

  const getVisibleTodos = () => {
    switch (pathname) {
      case '/active':
        return todos.filter(todo => !todo.completed);

      case '/completed':
        return todos.filter(todo => todo.completed);

      default:
        return todos;
    }
  };

  return (
    <section className="main">
      <input
        type="checkbox"
        id="toggle-all"
        className="toggle-all"
        checked={todosStatus}
        onChange={() => {
          changeTodosStatus(!todosStatus);
        }}
      />
      <label className="toggle_icon" htmlFor="toggle-all" />

      <ul className="todo_list">
        {getVisibleTodos().map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </section>
  );
};
