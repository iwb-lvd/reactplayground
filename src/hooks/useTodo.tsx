import React, { useContext, useReducer } from "react";
import { TodoContext as TodoContextType, TodoProviderProps } from '../types/hooks/useTodo'

export const TodoContext = React.createContext<TodoContextType>([
	{
		todos: [],
		filter: 'ALL'
	},
	() => {},
]);

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children, state, store }: TodoProviderProps) => {

		return (
		<TodoContext.Provider value={useReducer(store, state)}>
			{children}
		</TodoContext.Provider>
		);
}