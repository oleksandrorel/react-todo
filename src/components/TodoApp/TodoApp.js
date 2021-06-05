import React, { useState, useEffect } from 'react';
import { TodoList } from '../TodoList';
import { TodosFilter } from '../TodosFilter';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../../store/index';
import { actions } from '../../store/todo';
import './TodoApp.scss';

export const TodoApp = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  const handleTodoChange = ({ target }) => {
    const { value } = target;

    setTodoTitle(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!todoTitle.trim()) {
      setTodoTitle('');
      return;
    }

    const newTodo = {
      id: +new Date(),
      title: todoTitle.trim(),
      completed: false,
    };

    dispatch(actions.add(newTodo));
    setTodoTitle('');
  };

  const clearCompleted = () => {
    dispatch(actions.clearCompleted());
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <section className="todoapp">
        <h1 className="todoapp_title">React Todo List</h1>
      <header className="header">
        <form onSubmit={handleFormSubmit}>
          <input
            className="header_input"
            value={todoTitle}
            onChange={handleTodoChange}
            name="todoItem"
            type="text"
            placeholder="What needs to do?"
          />
        </form>
        {todos.length > 0
          && (
            <>
              <TodoList />
              <footer className="footer">
                <span className="todo-count">
                  {todos.filter(todoEl => !todoEl.completed).length === 1
                    ? `${todos.filter(el => !el.completed).length} item left`
                    : `${todos.filter(el => !el.completed).length} items left`}
                </span>

                <TodosFilter />

                <button
                  type="button"
                  className="clear-completed"
                  hidden={!todos.some(todoEl => todoEl.completed)}
                  onClick={clearCompleted}
                >
                  Clear completed
                </button>

              </footer>
            </>
          )
        }
      </header>

    </section>

  );
};
