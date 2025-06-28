import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/authActions';

export default function Register() {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    return (
        <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg mb-2">Register</h2>
            <input
                className="w-full mb-2 p-2 border rounded"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button
                className="w-full bg-green-500 text-white py-2 rounded"
                onClick={() => email && dispatch(register(email))}
            >
                Register
            </button>
        </div>
    );
}
