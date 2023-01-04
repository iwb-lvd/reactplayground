import React from "react";
import classNames from "classnames";
import "./style.css";
import { useTodo } from "../../hooks/useTodo";

function TodoFooter() {
  const [state, dispatch] = useTodo();

  return (
    <>
      {state.todos.length > 0 && (
        <footer className="footer">
          <span className="todo-count">
            ({state.todos.filter((todo) => !todo.completed).length}) items left
          </span>
          <ul className="filters">
            <li>
              <a
                href="#/"
                className={classNames({ selected: state.filter === "ALL" })}
                onClick={() =>
                  dispatch({ type: "SET_FILTER", payload: { filter: "ALL" } })
                }
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#/active"
                className={classNames({ selected: state.filter === "ACTIVE" })}
                onClick={() =>
                  dispatch({
                    type: "SET_FILTER",
                    payload: { filter: "ACTIVE" },
                  })
                }
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#/completed"
                className={classNames({
                  selected: state.filter === "COMPLETED",
                })}
                onClick={() =>
                  dispatch({ type: "SET_FILTER", payload: { filter: "COMPLETED" } })
                }
              >
                Completed
              </a>
            </li>
          </ul>
          <button
            className="clear-completed"
            style={{ display: "block" }}
            onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
          >
            Clear completed
          </button>
        </footer>
      )}
    </>
  );
}

export default TodoFooter;
