import React, { Component } from 'react';
import './Exercise.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

class Exercise extends Component {
    render() {
        return (
            <div>
                <h1 style={style_header}>This is a Header</h1>
                <p className="para" >This is a paragraph</p>
                <a href="https://reactjs.org">This is a link</a>
                <form>
                    <h3>This is a form :</h3>
                    <label>Enter ur name</label><br></br>
                    <input type="text" placeholder="Your name" />
                    <button>Submit</button>
                </form>
                <h4>Here is an image</h4>
                <img src="https://charantechnologies.com/images/react.jpg" alt="img" width={400} />
                <h4>This is a list</h4>
                <ul>
                    <li>Coffee</li>
                    <li>tea</li>
                    <li>Milk</li>
                </ul>
            </div>
        );
    }
}

export default Exercise;
