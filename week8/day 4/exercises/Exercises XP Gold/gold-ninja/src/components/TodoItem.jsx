import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo , removeTodo } from '../app/todosSlice';


const TodoItem = ({todo}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <li className="flex justify-between items-center bg-white p-3 rounded shadow">
                <span
                    onClick={() => dispatch(toggleTodo(todo.id))}
                    className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
                >
                    {todo.title}
                </span>
                <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-red-500"
                >
                    ✖
                </button>
            </li>
        </div>
    );
};

export default TodoItem;