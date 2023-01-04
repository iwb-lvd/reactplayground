import React from 'react';
import './style.css';
import { useTodo } from '../../hooks/useTodo';
import { TodoItem } from '../TodoItem';

function TodoList() {

  const [state, dispatch] = useTodo();

  const filteredTodos = () => {
    if (state.filter === "ACTIVE") return state.todos.filter((todo) => !todo.completed);
    if (state.filter === "COMPLETED") return state.todos.filter((todo) => todo.completed);
    return state.todos;
  }

  const handleOnChange = () => {
    dispatch({ type: 'TOGGLE_ALL' })
  }

  const isAllTodoChecked = Object.values(state.todos).every(todo => todo.completed);

  return (
    <>
      {state.todos.length > 0 && (
        <>
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox" 
            checked={isAllTodoChecked}
            onChange={handleOnChange}/>
          <label htmlFor="toggle-all">Mark all as complete</label>
        </>
        )
      }

      <ul className="todo-list">
        {
          filteredTodos().map(todo => <TodoItem key={todo.id} todo={todo}></TodoItem>)
        }
      </ul>
    </>
  );
}

export default TodoList;
