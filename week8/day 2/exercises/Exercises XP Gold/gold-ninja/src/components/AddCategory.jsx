import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../redux/todoSlice';

const AddCategory = () => {

    const [category , setCategory] = useState('');
    const dispatch = useDispatch()

    const handleAdd = () => {
        if(!category) return;
        dispatch(addCategory(category));
        setCategory('');
    }

    return (
        <div className="mb-4">
            <input type="text"  placeholder='New category' className="border p-2 mr-2 rounded w-2/3" value={category} onChange={(e) => setCategory(e.target.value)}/>
            <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Category</button>
        </div>
    );
};

export default AddCategory;