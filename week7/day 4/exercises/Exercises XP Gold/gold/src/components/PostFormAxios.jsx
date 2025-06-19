import React, { Component } from 'react';
import axios from 'axios';

class PostFormAxios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            title: '',
            body: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { userId, title, body } = this.state;

        axios.post('https://jsonplaceholder.typicode.com/posts', {
            userId,
            title,
            body
        })
            .then(response => {
                console.log('Posted data:', response.data);
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    };

    render() {
        const { userId, title, body } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        type="number"
                        placeholder="User ID"
                        name="userId"
                        value={userId}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Body"
                        name="body"
                        value={body}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default PostFormAxios;
