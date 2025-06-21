import React, { Component } from 'react';

class Customers extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(data => this.setState({ customers: data }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <h2>Customer List</h2>
                <ul>
                    {this.state.customers.map(c => (
                        <li key={c.id}>
                            {c.firstName} {c.lastName}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Customers;
