import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/inventorySlice';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (!name || !quantity) return;

        dispatch(addProduct({
            id: Date.now(),
            name,
            quantity: parseInt(quantity)
        }));

        setName('');
        setQuantity('');
        console.log("dispatching:", { name, quantity });

    };

    return (
        <div className="p-4 bg-gray-100 rounded shadow mb-4">
            <h2 className="text-lg font-bold mb-2">Add Product</h2>
            <input
                type="text"
                placeholder="Product name"
                className="border p-2 mr-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Quantity"
                className="border p-2 mr-2 rounded"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={handleAdd} className="bg-red-400 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add
            </button>
        </div>
    );
};

export default AddProduct;
