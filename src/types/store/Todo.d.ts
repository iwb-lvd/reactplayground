import { Todo, TodoProviderState } from "../hooks/useTodo";
import { Filter } from "../Todos";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export interface Action {
  type: string,
  payload: Record<string, any>
}

export type TodoStore = (
  state: TodoProviderState,
  action: TodoActions
) => TodoProviderState;

export interface TodoPayload {
  ADD_TODO: { title: Todo["title"] };
  REMOVE_TODO: { id: Todo["id"] };
  SET_FILTER: { filter: Filter };
  CLEAR_COMPLETED: undefined;
  TOGGLE_ALL: undefined;
  TOGGLE_TODO: { id: Todo["id"] };
  UPDATE_TODO: { id: Todo["id"], title: Todo["title"] };
}

export type TodoActions = ActionMap<TodoPayload>[keyof ActionMap<TodoPayload>];