import React, { useState } from 'react';
import { useTodo } from '../../hooks/useTodo';
import './style.css';

function TodoHeader() {

  const dispatch = useTodo()[1];
  
  const [title, setTitle] = useState("");

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && title.trim()) {
      dispatch({ 
        type: 'ADD_TODO', 
        payload: { title: title.trim() }
      })
      setTitle("");
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  } 

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyDown={handleOnKeyDown}
        onChange={handleOnChange}
        value={title}
      />
    </header>
  );
}

export default TodoHeader;
