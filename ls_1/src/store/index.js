import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../store/counter-slice';
export const store = configureStore({
	reducer: { todoList: counterReducer },
});
