import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/inventorySlice";

const RemoveProduct = () => {
    const products = useSelector((state) => state.inventory.products);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Remove Product</h2>
            {products.map((p) => (
                <div key={p.id}>
                    {p.name}
                    <button onClick={() => dispatch(removeProduct(p.id))}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default RemoveProduct;