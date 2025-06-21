import React, { Component } from 'react';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errorMsg: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({ posts: data }))
            .catch(error => this.setState({ errorMsg: 'Error fetching posts' }));
    }

    render() {
        const { posts, errorMsg } = this.state;

        return (
            <div>
                <h2>List of posts</h2>
                {posts.length ? (
                    posts.map(post => (
                        <div key={post.id}>
                            <p><b>ID : </b>{post.id}</p>
                            <p><b>Title : </b>{post.title}</p>
                            <p><b>Body : </b>{post.body}</p>
                            <hr />
                        </div>

                    ))
                ) : (
                    <p>{errorMsg || 'Loading...'}</p>
                )}
            </div>
        );
    }
}

export default PostList;
