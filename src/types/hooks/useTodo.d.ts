import React from "react";
import { TodoActions, TodoStore } from "../store/Todo";

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type Filter = "ALL" | "COMPLETED" | "ACTIVE";

export interface TodoProviderState {
  todos: Todo[]
  filter: Filter
}

export interface TodoProviderProps {
  state: TodoProviderState
  store: TodoStore
  children?: React.ReactNode
}

// export interface TodoContext {
//   state: TodoProviderState,
//   dispatch: React.Dispatch<any> // ?
// }
export type TodoContext = [TodoProviderState, React.Dispatch<TodoActions>]