import { v4 } from "uuid";
import { TodoStore } from "../types/store/Todo";

export const todoStore: TodoStore = (state, action) => {
  const { todos } = state;
  switch (action.type) {
    case "ADD_TODO": {
      const { title } = action.payload;
        return {
          ...state,
          todos: [
            ...todos,
            {
              id: v4(),
              title,
              completed: false,
            }
          ]
        }
    }

    case "REMOVE_TODO": {
      const { id } = action.payload;
        return {
          ...state,
          todos: todos.filter(todo => todo.id !== id)
        }
    }
  
    case "SET_FILTER": {
      const { filter } = action.payload;
        return {
          ...state,
          filter,
        };
    }
  
    case "CLEAR_COMPLETED": {
      return {
        ...state,
        todos: todos.filter(todo => !todo.completed)
      };
    }
  
    case "TOGGLE_ALL": {
      const allChecked = Object.values(todos).every((todo) => todo.completed);
      return {
        ...state,
        todos: todos.map(todo => ({ ...todo, completed: !allChecked }))
      };
    }

    case "TOGGLE_TODO": {
      const { id } = action.payload;
      return {
        ...state,
        todos: todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
      };
    }

    case "UPDATE_TODO": {
      const { title, id } = action.payload;
      return {
        ...state,
        todos: todos.map(todo => todo.id === id ? { ...todo, title } : todo)
      };
    }
  
    default:
      return state;
  }
};

export default todoStore;
