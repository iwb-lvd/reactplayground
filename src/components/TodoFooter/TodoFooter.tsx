import React from 'react';
import classNames from 'classnames';
import './style.css';
import { Filter, TodoInterface } from '../../types/Todos';

interface TodoFooterProps {
  setFilter: (filter: Filter) => void
  filter: Filter
  todos: TodoInterface[]
  clearCompleted: () => void
}

function TodoFooter(props: TodoFooterProps) {
  return (
    <>
      {
        props.todos.length > 0 &&
        <footer className="footer">
          <span className="todo-count">({props.todos.filter(todo => !todo.completed).length}) items left</span>
          <ul className="filters">
            <li>
              <a href="#/" className={classNames({ selected: props.filter === 'ALL' })} onClick={() => props.setFilter('ALL')}>All</a>
            </li>
            <li>
              <a href="#/active" className={classNames({ selected: props.filter === 'ACTIVE' })} onClick={() => props.setFilter('ACTIVE')}>Active</a>
            </li>
            <li>
              <a href="#/completed" className={classNames({ selected: props.filter === 'COMPLETED' })} onClick={() => props.setFilter('COMPLETED')}>Completed</a>
            </li>
          </ul>
          <button className="clear-completed" style={{ display: 'block' }} onClick={props.clearCompleted}>Clear completed</button>
        </footer>
      }
    </>
  );
}

export default TodoFooter;
