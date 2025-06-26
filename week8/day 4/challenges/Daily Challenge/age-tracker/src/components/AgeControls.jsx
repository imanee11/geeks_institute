import React from 'react';
import { useDispatch } from 'react-redux';
import { ageDownAsync, ageUpAsync } from '../redux/ageSlice';

const AgeControls = () => {

    const dispatch = useDispatch();

    return (
        <div className="flex justify-center gap-4 mt-6">
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => dispatch(ageUpAsync())}>
                age up
            </button>

            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => dispatch(ageDownAsync())}>
                age down
            </button>
        </div>
    );
};

export default AgeControls;