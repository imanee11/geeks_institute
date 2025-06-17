import React, { useState } from 'react';

const Car = ({ model }) => {

    const [color] = useState("red");
    return (
        <>
            <h2>This car is {color} {model}</h2>

        </>
    );
};

export default Car;