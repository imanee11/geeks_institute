import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectProducts,
    selectCartItems,
    calculateTotalPrice,
    addToCart
} from '../features/cart/cartSlice';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const cart = useSelector(selectCartItems);
    const total = useSelector(calculateTotalPrice);

    const handleAddToCart = useCallback((product) => {
        dispatch(addToCart(product));
    }, [dispatch]);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

            <h2 className="text-lg font-semibold mb-2">Products</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {products.map(product => (
                    <li key={product.id} className="p-4 border rounded shadow">
                        <h3 className="text-md font-medium">{product.name}</h3>
                        <p className="text-sm text-gray-600">${product.price}</p>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>

            <h2 className="text-lg font-semibold mb-2">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="text-gray-500">Cart is empty.</p>
            ) : (
                <ul className="space-y-3">
                    {cart.map(item => (
                        <li key={item.id} className="flex justify-between p-3 border rounded shadow-sm">
                            <span>{item.name} x {item.quantity}</span>
                            <span>${item.price * item.quantity}</span>
                        </li>
                    ))}
                </ul>
            )}

            <div className="mt-6 text-right">
                <h3 className="text-xl font-bold">Total: ${total}</h3>
            </div>
        </div>
    );
};

export default ShoppingCart;
