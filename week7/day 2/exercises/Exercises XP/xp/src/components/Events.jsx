import React, { useState } from 'react';

const Events = () => {
    const clickMe = () => {
        alert("I was clicked");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            alert(`You typed: ${event.target.value}`);
        }
    };


    const [isToggleOn, setIsToggleOn] = useState(true)


    const handleToggle = () => {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <>
            <button onClick={clickMe}>Click me</button>
            <br /> <br />
            <input
                type="text"
                placeholder="press the Enter key!"
                onKeyDown={handleKeyDown}
            />
            <br /><br />

            <button onClick={handleToggle}>
                {isToggleOn ? "ON" : "OFF"}
            </button>
        </>
    );
};

export default Events;