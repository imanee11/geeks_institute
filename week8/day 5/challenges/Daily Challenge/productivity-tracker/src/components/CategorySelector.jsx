import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categorySlice';

const CategorySelector = ({ selected, onChange }) => {

    const categories = useSelector(selectCategories);

    return (
        <div>
            <select
                value={selected}
                onChange={e => onChange(Number(e.target.value))}
                className="p-2 border rounded shadow"
            >
                {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelector;