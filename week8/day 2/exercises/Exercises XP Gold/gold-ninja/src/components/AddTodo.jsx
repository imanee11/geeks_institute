import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice';


const AddTodo = () => {

    const [text, setText] = useState('');
    const [category, setCategory] = useState('');
    const categories = useSelector((state) => Object.keys(state.todos.categories));
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (!text || !category) return;
        dispatch(addTodo({ category, text }));
        setText('');
    };

    return (
        <div className="mb-4">
            <input type="text" placeholder="New todo" className="border p-2 mr-2 rounded w-2/3" value={text} onChange={(e) => setText(e.target.value)} />
            <select name="" id="" className="border p-2 rounded mr-2" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-3">
                Add Todo
            </button>
        </div>
    );
};

export default AddTodo;