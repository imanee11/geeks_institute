import React, { useEffect, useState } from 'react';

const Color = () => {

    const [favoriteColor, setFavoriteColor] = useState("red")

    useEffect(() => {
        alert("useEffect reached");
    });

    const changeColor = () => {
        setFavoriteColor("blue");
    };

    return (
        <>
            <h2>My fav color is {favoriteColor}</h2>
            <button onClick={changeColor}>Change color to blue</button>
        </>
    );
};

export default Color;