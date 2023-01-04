import React from 'react';
import './style.css';
import { TodoInterface as Todo, RemoveTodo, Filter, ToggleTodo, ToggleEdit, UpdateTodo } from '../../types/Todos'
import classNames from 'classnames';

interface TodoListProps {
  todos: Todo[]
  removeTodo: RemoveTodo
  filter: Filter
  toggleTodo: ToggleTodo
  toggleAll: () => void
  toggleEdit: ToggleEdit
  updateTodo: UpdateTodo
}


function TodoList(props: TodoListProps) {

  const filteredTodos = () => {
    if (props.filter === "ACTIVE") return props.todos.filter(todo => !todo.completed);
    if (props.filter === "COMPLETED") return props.todos.filter(todo => todo.completed);
    return props.todos;
  }

  const handleDoubleClick = (e: React.MouseEvent, todo: Todo) => {
    if (e.detail === 2) {
      props.toggleEdit(todo.id)
    }
  }

  const handleOnblur = (e: React.FocusEvent, todo: Todo) => {
    props.toggleEdit(todo.id)
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, todo: Todo) => {
    props.updateTodo(todo.id, e.target.value)
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, todo: Todo) => {
    if (e.key === "Enter") {
      props.toggleEdit(todo.id)
    }
  }

  return (
    <>
      {props.todos.length > 0 && (
        <>
          <input id="toggle-all" className="toggle-all" type="checkbox" checked={Object.values(props.todos).every(todo => todo.completed)} onChange={props.toggleAll}/>
          <label htmlFor="toggle-all">Mark all as complete</label>
        </>
        )
      }

      <ul className="todo-list">
        {
          filteredTodos()
            .map(todo => 
            <li className={classNames({completed: todo.completed, editing: todo.editing})} key={todo.id}>
              <div className="view" onClick={(e) => handleDoubleClick(e, todo)}>
                <input className="toggle" type="checkbox" onChange={() => props.toggleTodo(todo.id)} checked={todo.completed}/>
                <label>{todo.title}</label>
                <button className="destroy" onClick={()=> props.removeTodo(todo.id)}></button>
              </div>
              <input 
                className="edit"
                onBlur={(e) => handleOnblur(e, todo)}
                onChange={(e) => handleOnChange(e, todo)}
                onKeyDown={(e) => handleOnKeyDown(e, todo)} value={todo.title}
                autoFocus
              />
            </li>
          )
        }
      </ul>
    </>
  );
}

export default TodoList;
