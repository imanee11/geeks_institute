import React, { useState } from 'react';

const UserForm = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
    })

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        });
        setSubmitted(false);
    };

    return (
        <div style={{
            backgroundColor: 'pink',
            padding: '30px',
            borderRadius: '40px',
            width: '300px',
            margin: '50px auto',
            textAlign: 'center'
        }}>
            {!submitted ? (
                <>
                    <h1 style={{ fontSize: '36px'}}>Welcome!</h1>
                    <p>Please provide your information below.</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        /><br /><br />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        /><br /><br />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        /><br /><br />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        /><br /><br />
                        <button type="submit">Submit</button>
                    </form>
                </>
            ) : (
                <>
                    <h2>{formData.lastName}, {formData.firstName}</h2>
                    <p>{formData.phone} | {formData.email}</p>
                    <button onClick={handleReset}>Reset</button>
                </>
            )}
        </div>
    );
};

export default UserForm;