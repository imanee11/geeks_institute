import React, { useState } from 'react';

const BookForm = () => {

    const [formData, setFormData] = useState({
        Title: '',
        Author: '',
        Genre: '',
        YearReleased: ''
    })

    const [message , setMessage] = useState('')

    const handleChange = (e) => {
        const {name , value} = e.target

        setFormData((prevData) => ({
            ...prevData,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setMessage('data sent!')
    }

    return (
        <div>
            <h1>New Book</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <label>Title : </label>
                <input type="text" name='Title' value={formData.Title} onChange={handleChange} />
                <br /><br />
                <label>Author : </label>
                <input type="text" name='Author' value={formData.Author} onChange={handleChange} />
                <br /><br />
                <label>Genre : </label>
                <input type="text" name='Genre' value={formData.Genre} onChange={handleChange} />
                <br /><br />
                <label>Year Published : </label>
                <input type="text" name='YearReleased' value={formData.YearReleased} onChange={handleChange} />
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BookForm;