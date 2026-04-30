import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../../store/counter-slice';
import './style.css';
const TodoList = () => {
	const [text, setText] = useState('');
	const todos = useSelector((state) => state.todoList.todo);
	const dispatch = useDispatch();
	// const count = useSelector((state) => state.counter.count);
	const add_todo_btn = () => {
		if (text.trim() === '') return;

		dispatch(addTodo(text));

		setText('');
	};
	return (
		<div>
			<div className="todo">
				<input
					type="text"
					placeholder="Введите задачу"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button onClick={add_todo_btn}>Добавить задачу</button>
			</div>
			<ul>
				{todos.map((item, index) => (
					<li key={item.id}>
						{item.text}
						<button onClick={() => dispatch(deleteTodo(item.id))}>
							Удалить
						</button>
						<input
							type="checkbox"
							checked={item.completed}
							onChange={() => dispatch(toggleTodo(item.id))}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
