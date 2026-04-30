import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
	name: 'TodoList',
	initialState: {
		todo: [],
	},
	reducers: {
		addTodo: (state, action) => {
			state.todo.push({
				id: Date.now(),
				text: action.payload,
				completed: false,
			});
		},
		deleteTodo: (state, action) => {
			state.todo = state.todo.filter((item) => item.id !== action.payload);
		},
		toggleTodo: (state, action) => {
			const todo = state.todo.find((item) => item.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
	},
});

export const { addTodo, deleteTodo, toggleTodo } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
