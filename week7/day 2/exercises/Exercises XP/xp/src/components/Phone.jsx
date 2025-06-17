import React, { useState } from 'react';

const Phone = () => {

    const [brand] = useState("Samsung");
    const [model] = useState("Galaxy S20");
    const [color, setColor] = useState("black");
    const [year] = useState(2020);


    const changeColor = () => {
        setColor("blue");
    };

    return (
        <>
            <div>
                <h2>My Phone is a {brand}</h2>
                <h4>its a {color} {model} from {year}</h4>
                <button onClick={changeColor}>
                    change color
                </button>

            </div>
        </>
    );
};

export default Phone;