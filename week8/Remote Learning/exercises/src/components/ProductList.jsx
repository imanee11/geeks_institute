import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredProducts } from '../features/products/productSelectors';

const ProductList = () => {
    const [category, setCategory] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 2000]);
    const [sortBy, setSortBy] = useState('');

    const products = useSelector(
        selectFilteredProducts(category, inStockOnly, priceRange, sortBy)
    );

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4 text-center">Product Inventory</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <select
                    className="p-2 border rounded"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                >
                    <option value="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Books">Books</option>
                </select>

                <select
                    className="p-2 border rounded"
                    onChange={(e) => setSortBy(e.target.value)}
                    value={sortBy}
                >
                    <option value="">Sort</option>
                    <option value="price">By Price</option>
                    <option value="name">By Name</option>
                </select>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => setInStockOnly(e.target.checked)}
                    />
                    <label>In Stock Only</label>
                </div>

                <div className="flex gap-2 items-center">
                    <label className="text-sm">Price:</label>
                    <input
                        type="number"
                        className="p-1 border w-20"
                        placeholder="Min"
                        value={priceRange[0]}
                        onChange={(e) =>
                            setPriceRange([Number(e.target.value), priceRange[1]])
                        }
                    />
                    <input
                        type="number"
                        className="p-1 border w-20"
                        placeholder="Max"
                        value={priceRange[1]}
                        onChange={(e) =>
                            setPriceRange([priceRange[0], Number(e.target.value)])
                        }
                    />
                </div>
            </div>

            <ul className="space-y-4">
                {products.map((product) => (
                    <li
                        key={product.id}
                        className="p-4 border rounded shadow-sm hover:shadow-md transition"
                    >
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-sm text-gray-600">Category: {product.category}</p>
                        <p className="text-sm text-gray-600">Price: ${product.price}</p>
                        <p className="text-sm">
                            {product.inStock ? (
                                <span className="text-green-600">In Stock</span>
                            ) : (
                                <span className="text-red-600">Out of Stock</span>
                            )}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
