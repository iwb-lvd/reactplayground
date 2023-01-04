import React, { useState } from 'react';
import { TodoHeader } from '../TodoHeader';
import { TodoList } from '../TodoList';
import { TodoFooter } from '../TodoFooter';
import { TodoInterface, CreateTodo, RemoveTodo, Filter, ToggleTodo, ToggleEdit, UpdateTodo } from '../../types/Todos'
import { v4 as uuid } from 'uuid';

import './style.css';

function Todo() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);
  const [filter, setFilter] = useState<Filter>('ALL');

  const createTodo: CreateTodo = (title, completed = false) => {
    setTodos(todos => [
      ...todos, 
      {
        id: uuid(),
        title,
        completed,
        editing: false
      }
    ])
  }

  const removeTodo: RemoveTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  const clearCompleted = () => {
    setTodos(todos => todos.filter(todo => !todo.completed))
  }

  const toggleTodo: ToggleTodo = (id) => {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const toggleAll = () => {
    const allChecked = Object.values(todos).every(todo => todo.completed);
    setTodos(todos => todos.map(todo => ({...todo, completed: !allChecked})))
  }

  const toggleEdit: ToggleEdit = (id) => {
    // filter on title to remove missing string
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, editing: !todo.editing} : todo).filter(todo => todo.title))
  }

  const updateTodo: UpdateTodo = (id, title) => {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, title } : todo))
  }

  return (
    <section className="todoapp">
      <TodoHeader createTodo={createTodo}></TodoHeader>
      <section style={{ display: 'block' }} className="main">
        <TodoList todos={todos} removeTodo={removeTodo} filter={filter} toggleTodo={toggleTodo} toggleAll={toggleAll} toggleEdit={toggleEdit} updateTodo={updateTodo}></TodoList>
        <TodoFooter setFilter={setFilter} filter={filter} todos={todos} clearCompleted={clearCompleted}></TodoFooter>
      </section>
    </section>
  );
}

export default Todo;
