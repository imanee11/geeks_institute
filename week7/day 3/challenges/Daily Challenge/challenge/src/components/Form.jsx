import React from 'react';

const Form = ({ data, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" name="firstName" value={data.firstName} onChange={handleChange} className='inp'/>
            <input type="text" placeholder="Last Name" name="lastName" value={data.lastName} onChange={handleChange} className='inp' />
            <input type="number" placeholder="Age" name="age" value={data.age} onChange={handleChange} className='inp'/>

            <div>
                <label>
                    <input type="radio" name="gender" value="male" checked={data.gender === "male"} onChange={handleChange} className='inp2'/>
                    Male
                </label>

                <label>
                    <input type="radio" name="gender" value="female" checked={data.gender === "female"} onChange={handleChange} className='inp2'/>
                    Female
                </label>
            </div>

            <div>
                <label> Select your destination<br />
                    <select name="destination" value={data.destination} onChange={handleChange}>
                        <option value="">-- Choose --</option>
                        <option value="Japan">Japan</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Brazil">Brazil</option>
                    </select>
                </label>
            </div>

            <div>
                <h4>Dietary restrictions:</h4>
                <label>
                    <input type="checkbox" name="isNutsFree" checked={data.isNutsFree} onChange={handleChange} className='inp2'/>
                    Nuts Free
                </label>
                <br />
                <label>
                    <input type="checkbox" name="isLactoseFree" checked={data.isLactoseFree} onChange={handleChange} className='inp2'/>
                    Lactose Free
                </label>
                <br />
                <label>
                    <input type="checkbox" name="isVegan" checked={data.isVegan} onChange={handleChange} className='inp2'/>
                    Vegan
                </label>
            </div>

            <button type="submit">Submit</button>

            <hr />

            <h3>Entered Information:</h3>
            <p>Name: {data.firstName} {data.lastName}</p>
            <p>Age: {data.age}</p>
            <p>Gender: {data.gender}</p>
            <p>Destination: {data.destination}</p>
            <p>Dietary Restrictions:</p>
            <ul>
                <li>Nuts Free: {data.isNutsFree ? "Yes" : "No"}</li>
                <li>Lactose Free: {data.isLactoseFree ? "Yes" : "No"}</li>
                <li>Vegan: {data.isVegan ? "Yes" : "No"}</li>
            </ul>
        </form>
    );
};

export default Form;
