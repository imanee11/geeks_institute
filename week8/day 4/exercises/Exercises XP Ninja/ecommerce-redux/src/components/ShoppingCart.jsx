import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice'

export default function ShoppingCart() {
    const cartItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)

    return (
        <div className="p-4 bg-white mt-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Shopping Cart</h2>
            {cartItems.length === 0 && <p>Your cart is empty.</p>}
            {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b py-2">
                    <div>
                        <p>{item.title}</p>
                        <p>${item.price} x {item.quantity}</p>
                    </div>
                    <div>
                        <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            className="border px-1 w-12 text-center"
                            onChange={(e) =>
                                dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                            }
                        />
                        <button
                            className="ml-2 text-red-500"
                            onClick={() => dispatch(removeFromCart(item.id))}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            {cartItems.length > 0 && (
                <div className="mt-4 font-bold text-right">
                    Total: ${total}
                </div>
            )}
        </div>
    )
}
