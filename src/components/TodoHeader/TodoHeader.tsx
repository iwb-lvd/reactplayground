import React, { useState } from 'react';
import { CreateTodo } from '../../types/Todos'
import './style.css';

interface TodoHeaderProps {
  createTodo: CreateTodo
}

function TodoHeader(props: TodoHeaderProps) {

  const [newTodoText, setNewTodoText] = useState("");

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTodoText.trim()) {
      props.createTodo(newTodoText);
      setNewTodoText("");
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value)
  } 

  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={handleOnKeyDown} onChange={handleOnChange} value={newTodoText} />
    </header>
  );
}

export default TodoHeader;
