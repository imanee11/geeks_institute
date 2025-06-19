import React, { Component } from 'react';
import data from '../json/data2.json';

class Example3 extends Component {
    render() {
        return (
            <div>
                <h4>Experiences</h4>
                {data.Experiences.map((exp, index) => (
                    <div key={index} style={{ marginBottom: '1rem', padding: '1rem' }}>
                        <a href={exp.url} target="_blank" rel="noreferrer">
                            <img src={exp.logo} alt={`${exp.companyName} logo`} width="100" />
                        </a>


                        <div>
                            <a href={exp.url}>{exp.companyName}</a>
                            {exp.roles.map((role, i) => (
                                <div key={i} style={{ marginTop: '0.5rem' }}>
                                    <h6>{role.title}</h6>
                                    <p>
                                        {role.startDate} - {role.endDate}
                                    </p>
                                    <p>{role.description}</p>

                                    <p>{role.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Example3;
