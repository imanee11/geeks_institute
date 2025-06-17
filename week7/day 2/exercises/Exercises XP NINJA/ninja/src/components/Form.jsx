// Form.js
import React, { useState } from "react";
import Input from "./Input";

function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.phone) {
            newErrors.phone = "Phone is required";
        } else if (!/^\d{9,15}$/.test(formData.phone)) {
            newErrors.phone = "Phone must be 9–15 digits";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted ✅");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="First Name"
                value={formData.firstName}
                onChange={handleChange("firstName")}
                error={errors.firstName}
            />
            <Input
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange("lastName")}
                error={errors.lastName}
            />
            <Input
                label="Phone"
                value={formData.phone}
                onChange={handleChange("phone")}
                error={errors.phone}
            />
            <Input
                label="Email"
                value={formData.email}
                onChange={handleChange("email")}
                error={errors.email}
            />
            <button type="submit" style={{ padding: "5px 10px" }}>Submit</button>
        </form>
    );
}

export default Form;
