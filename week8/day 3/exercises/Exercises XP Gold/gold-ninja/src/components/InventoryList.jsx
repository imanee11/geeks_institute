import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, updateQuantity } from '../redux/inventorySlice';

const InventoryList = () => {
    const { products } = useSelector((state) => state.inventory);
    const dispatch = useDispatch();

    return (
        <div className="bg-white shadow p-4 rounded">
            <h2 className="text-xl font-bold mb-4">Inventory List</h2>
            {products.length === 0 && <p className="text-gray-500">No products added yet.</p>}
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="mb-3 flex items-center justify-between border-b pb-2">
                        <div>
                            <p className="font-semibold">{product.name}</p>
                            <p className="text-sm text-gray-600">Qty: {product.quantity}</p>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="number"
                                className="border p-1 rounded w-20"
                                defaultValue={product.quantity}
                                onBlur={(e) =>
                                    dispatch(updateQuantity({ id: product.id, quantity: Number(e.target.value) }))
                                }
                            />
                            <button
                                className="text-red-500 hover:underline"
                                onClick={() => dispatch(removeProduct(product.id))}
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryList;
