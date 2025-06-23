import React, { useReducer, useRef } from 'react';

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            if (!action.payload.trim()) return state;
            return [
                ...state,
                { id: Date.now(), text: action.payload.trim() }
            ];
        case 'remove':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

const TodoList = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const inputRef = useRef();

    const handleAdd = () => {
        dispatch({ type: 'add', payload: inputRef.current.value });
        inputRef.current.value = '';
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4 text-center">Todo List</h2>
            <div className="flex mb-4 gap-2">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Enter todo"
                    className="flex-1 border border-gray-300 rounded px-3 py-2"
                    onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                />
                <button
                    onClick={handleAdd}
                    className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
                >
                    Add
                </button>
            </div>

            <ul className="space-y-2">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center bg-gray-50 p-2 rounded border"
                    >
                        <span>{todo.text}</span>
                        <button
                            onClick={() => dispatch({ type: 'remove', payload: todo.id })}
                            className="text-red-500 hover:underline"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
