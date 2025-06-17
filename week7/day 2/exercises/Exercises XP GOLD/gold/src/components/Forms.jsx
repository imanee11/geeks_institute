import React, { useState } from 'react';

const Forms = () => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [errormessage, setErrormessage] = useState("");
    const [textareaValue, setTextareaValue] = useState("hii i love cats");
    const [selectedCar, setSelectedCar] = useState("Volvo");


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleAgeChange = (event) => {
        const val = event.target.value;
        if (val !== "" && isNaN(val)) {
            setErrormessage("age must be a number");
        } else {
            setErrormessage("");
        }
        setAge(val);
    };

    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    const handleSelectChange = (event) => {
        setSelectedCar(event.target.value);
    };

    let header;
    if (username || age) {
        header = <h1>Hello {username} {age}</h1>;
    }

    const mySubmitHandler = (event) => {
        event.preventDefault();
        if (errormessage) {
            alert("pls fix errors before submitting.");
        } else {
            alert(`you are submitting: ${username}`);
        }
    };

    return (
        <div>
            <form onSubmit={mySubmitHandler}>
                {header}

                <label>Enter ur name:</label><br />
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <br /><br />

                <label>Enter ur age:</label><br />
                <input
                    type="text"
                    id="age"
                    name="age"
                    value={age}
                    onChange={handleAgeChange}
                />
                {errormessage && <div style={{ color: "red" }}>{errormessage}</div>}
                <br /><br />

                <label>Write something:</label><br />
                <textarea
                    id="textarea"
                    value={textareaValue}
                    onChange={handleTextareaChange}
                    rows="4"
                    cols="50"
                />
                <br /><br />

                <label>Choose a car brand:</label><br />
                <select
                    id="cars"
                    value={selectedCar}
                    onChange={handleSelectChange}
                >
                    <option value="Volvo">Volvo</option>
                    <option value="Saab">Saab</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Audi">Audi</option>
                </select>
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Forms;
