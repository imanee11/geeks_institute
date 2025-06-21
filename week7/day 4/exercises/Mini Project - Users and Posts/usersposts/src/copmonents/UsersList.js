import React, { Component } from 'react';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({ users: data, isLoaded: true }))
            .catch(error => this.setState({ isLoaded: true }));
    }

    render() {
        const { users, isLoaded } = this.state;

        if (!isLoaded) {
            return <div><strong>Loading...</strong></div>;
        }

        return (
            <div>
                <h2>List of users</h2>                    
                {users.map(user => (
                    <div key={user.id} >
                        <p><b>ID : </b>{user.id}</p>
                        <p><b>Name : </b>{user.name}</p>
                        <p><b>Username : </b>{user.username}</p>
                        <p><b>Email : </b>{user.email}</p>
                        <p><b>City : </b>{user.city}</p>
                        <hr />
                    </div>
                ))}

            </div>
        );
    }
}

export default UsersList;
