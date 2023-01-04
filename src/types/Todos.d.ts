export interface TodoInterface {
  id: string
  title: string
  completed: boolean
  editing: boolean
}

export type CreateTodo = (
  title: TodoInterface["title"],
  completed?: TodoInterface["completed"]
) => void;

export type RemoveTodo = (id: TodoInterface["id"]) => void;

export type ToggleTodo = (id: TodoInterface["id"]) => void;

export type ToggleEdit = (id: TodoInterface["id"]) => void;

export type UpdateTodo = (
  id: TodoInterface["id"],
  title: TodoInterface["title"]
) => void;

export type Filter = 'ALL' | 'COMPLETED' | 'ACTIVE'