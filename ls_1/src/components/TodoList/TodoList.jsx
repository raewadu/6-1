import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../../store/counter-slice';
import './style.css';
import { Button } from 'antd';
import { Input } from 'antd';
import { Checkbox } from 'antd';
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
				<Input
					style={{ width: '300px' }}
					type="text"
					placeholder="Введите задачу"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<Button onClick={add_todo_btn} type="primary">
					Добавить задачу
				</Button>
			</div>
			<ul>
				{todos.map((item, index) => (
					<li
						key={item.id}
						style={{
							width: '450px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Checkbox
							checked={item.completed}
							onChange={() => dispatch(toggleTodo(item.id))}
						>
							{item.text}
						</Checkbox>

						<Button
							danger
							type="primary"
							onClick={() => dispatch(deleteTodo(item.id))}
						>
							Удалить
						</Button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
