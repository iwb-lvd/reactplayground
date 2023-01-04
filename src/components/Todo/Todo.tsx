import React from 'react';
import { TodoHeader } from '../TodoHeader';
import { TodoList } from '../TodoList';
import { TodoFooter } from '../TodoFooter';
import { v4 as uuid } from 'uuid';

import './style.css';
import { TodoProvider } from '../../hooks/useTodo';
import { TodoProviderState } from '../../types/hooks/useTodo';
import { todoStore } from '../../store/todo';

function Todo() {

  const state: TodoProviderState = {
    todos: [
      {
        id: uuid(),
        title: 'title1',
        completed: false
      },
      {
        id: uuid(),
        title: 'title2',
        completed: true
      },
    ],
    filter: 'ALL'
  }

  return (
    <TodoProvider state={state} store={todoStore}>
      <section className="todoapp">
        <TodoHeader></TodoHeader>
        <section style={{ display: 'block' }} className="main">
          <TodoList></TodoList>
          <TodoFooter></TodoFooter>
        </section>
      </section>
    </TodoProvider>
  );
}

export default Todo;
