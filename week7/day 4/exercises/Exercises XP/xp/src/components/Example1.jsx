import React, { Component } from 'react';
import data from '../json/data2.json';

class Example1 extends Component {
    render() {
        return (
            <div>
                <h4>Social Media Links</h4>
                <ul>
                    {data.SocialMedias.map((link, index) => (
                        <li key={index}>
                            <a href={link} target="_blank" rel="noreferrer">
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Example1;
