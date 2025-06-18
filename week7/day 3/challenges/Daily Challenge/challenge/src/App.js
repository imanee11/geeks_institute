import React, { useState } from 'react';
import Form from './components/Form';
import "./App.css";

const App = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    isNutsFree: false,
    isLactoseFree: false,
    isVegan: false,
  })

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      gender: formData.gender,
      destination: formData.destination,
      lactose: formData.isLactoseFree,
    }).toString();

    window.location.href = `http://localhost:3000/?${queryParams}`
  }


  return (
    <div className="container">
      <h2>Travel Form</h2>
      <Form
        data={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;