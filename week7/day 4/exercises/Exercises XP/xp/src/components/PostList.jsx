import React from 'react';
import data from '../json/data.json'

const PostList = () => {
    return (
        <div>
            {data.map((e) => (
                <div key={e.id} style={{ marginBottom: '20px' }}>
                    <h2>{e.title}</h2>
                    <p>{e.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;