import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useTodo } from '../../hooks/useTodo';
import { Todo } from '../../types/hooks/useTodo';
import './style.css';

interface TodoItemProps {
  todo: Todo
}

function TodoItem(props: TodoItemProps) {
  const [editing, setEditing] = useState(false)
  const dispatch = useTodo()[1];
  const { todo } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDoubleClick = (e: React.MouseEvent) => {
    if (e.detail === 2) {
      setEditing(true)
    }
  };

  const handleOnChangeCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: {
        id: todo.id
      }
    })
  }

  const handleOnClickDestroy = () => {
    dispatch({
      type: "REMOVE_TODO",
      payload: {
        id: todo.id,
      },
    });
  }

  const handleOnChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: {
        id: todo.id,
        title: e.target.value
      },
    });
  };

  const handleOnBlurEdit = () => {
    removeTodoIfNoTitle();
    setEditing(false);
  };

  const handleOnKeyDownEdit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      removeTodoIfNoTitle()
      setEditing(false);
    }
  };

  const removeTodoIfNoTitle = () => {
    if (!todo.title) {
      dispatch({
        type: "REMOVE_TODO",
        payload: {
          id: todo.id,
        },
      });
    }
  };

  // like nextTick of vue, needed to wait the update of the dom when editing is true to focus the input
  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  return (
    <li
      className={classNames({
        completed: todo.completed,
        editing: editing,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={handleOnChangeCompleted}
          checked={todo.completed}
        />
        <label onClick={handleDoubleClick}>{todo.title}</label>
        <button className="destroy" onClick={handleOnClickDestroy}></button>
      </div>
      <input
        ref={inputRef}
        className="edit"
        onBlur={handleOnBlurEdit}
        onChange={handleOnChangeEdit}
        onKeyDown={handleOnKeyDownEdit}
        value={todo.title}
      />
    </li>
  );
}

export default TodoItem;
