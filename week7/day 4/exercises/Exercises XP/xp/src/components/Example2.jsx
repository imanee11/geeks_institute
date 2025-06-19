import React, { Component } from 'react';
import data from '../json/data2.json';

class Example2 extends Component {
    render() {
        return (
            <div>
                <h4>Skills</h4>
                {data.Skills.map((skillArea, index) => (
                    <div key={index}>
                        <h6>{skillArea.Area}</h6>
                        <ul>
                            {skillArea.SkillSet.map((skill, i) => (
                                <li key={i}>
                                    {skill.Name} {skill.Hot && <span>Hot</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    }
}

export default Example2;
