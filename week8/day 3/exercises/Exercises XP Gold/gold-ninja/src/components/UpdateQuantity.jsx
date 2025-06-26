import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from '../redux/inventorySlice';


const UpdateQuantity = () => {

    const [id, setId] = useState("");
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.inventory.products);

    const handleUpdate = () => {
        dispatch(updateQuantity({ id: Number(id), quantity: Number(quantity) }));
        setId("");
        setQuantity(0);
    };
    return (
        <div>
            <h2>Update Quantity</h2>
            <select value={id} onChange={(e) => setId(e.target.value)}>
                <option value="">Select Product</option>
                {products.map((p) => (
                    <option key={p.id} value={p.id}>
                        {p.name}
                    </option>
                ))}
            </select>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default UpdateQuantity;