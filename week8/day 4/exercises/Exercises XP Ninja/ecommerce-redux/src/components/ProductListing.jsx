import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productThunks'
import { addToCart } from '../features/cart/cartSlice'

export default function ProductListing() {
    const dispatch = useDispatch()
    const { items, loading, error } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {items.map(product => (
                <div key={product.id} className="border p-2 rounded shadow bg-white">
                    <img src={product.image} alt={product.title} className="h-32 mx-auto object-contain" />
                    <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
                    <p className="text-green-600 font-bold">${product.price}</p>
                    <button
                        className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
                        onClick={() => dispatch(addToCart(product))}
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    )
}
