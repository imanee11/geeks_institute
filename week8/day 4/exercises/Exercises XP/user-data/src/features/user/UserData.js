import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './userSlice';

const UserData = () => {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch])

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4" >user info</h2>
            {loading && <p className='text-green-400'>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {!loading && data.name && (
                <div>
                    <p><b>Name:</b> {data.name}</p>
                    <p><b>Email:</b> {data.email}</p>
                    <p><b>Phone:</b> {data.phone}</p>
                </div>
            )}

        </div>
    );
};

export default UserData;