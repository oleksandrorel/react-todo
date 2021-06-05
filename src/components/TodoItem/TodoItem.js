import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useDispatch } from 'react-redux'
import { actions } from '../../store/todo';
import './TodoItem.scss';

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [editTodoId, setEditTodoId] = useState(0);
  const [editedTodoValue, setEditedTodoValue] = useState(todo.title);

  const deleteTodo = () => {
    dispatch(actions.remove(todo));
  };

  const saveEditedTodo = (key) => {
    if ((!editedTodoValue.trim() && key === 'Enter')
      || (!editedTodoValue.trim() && key === 'Blur')) {
      deleteTodo();
    }

    switch (key) {
      case 'Escape':
        return setEditTodoId(0);

      case 'Enter':
      case 'Blur':
        dispatch(actions.editTitle(todo, editedTodoValue))
        setEditedTodoValue(editedTodoValue.trim());

        return setEditTodoId(0);

      default:
        return todo;
    }
  };

  return (
    <li
      className={classnames('todo', {
        completed: todo.completed,
        editing: todo.id === editTodoId,
      })}
      onDoubleClick={
        () => {
          setEditTodoId(todo.id);
        }
      }
    >
      <div className="view">
        <input
          onChange={() => {
            dispatch(actions.editStatus(todo))
          }}
          type="checkbox"
          checked={todo.completed}
          className="toggle"
        />
        <label
          className="todo_title"
        >
          {todo.title}
        </label>
        <button
          type="button"
          className="destroy"
          onClick={deleteTodo}
        />
      </div>
      <input
        type="text"
        className="edit"
        value={editedTodoValue}
        onChange={({ target }) => {
          setEditedTodoValue(target.value);
        }}
        onKeyDown={({ key }) => {
          saveEditedTodo(key);
        }}
        onBlur={() => {
          saveEditedTodo('Blur');
        }}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
};
