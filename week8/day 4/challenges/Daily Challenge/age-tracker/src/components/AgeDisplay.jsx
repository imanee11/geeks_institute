import React from 'react';
import { useSelector } from 'react-redux';

const AgeDisplay = () => {

    const age = useSelector((state) => state.age.value);
    const loading = useSelector((state) => state.age.loading);


    return (
        <div className='text-center'>
            <h1 className="text-2xl font-bold mb-4">Your age</h1>
            {loading ? (
                <p className="text-yellow-500 animate-pulse">Updating...</p>
            ):(
                <p className="text-4xl font-bold text-green-600">{age}</p>
            )}
            
        </div>
    );
};

export default AgeDisplay;