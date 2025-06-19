import React, { Component } from 'react';

class PostUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            email: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { user, email } = this.state;

        fetch('https://jsonplaceholder.typicode.com/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                email: email
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Posted data:', data);
            })
            .catch((error) => console.error('Error:', error));
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User:</label>
                    <input
                        type="text"
                        name="user"
                        value={this.state.user}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default PostUserForm;
