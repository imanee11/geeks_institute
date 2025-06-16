import React from 'react';

const Card = () => {
    const cards = [
        {
            icon: 'fa-solid fa-rocket',
            title: 'About the Company',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            icon: 'fa-solid fa-shield-alt',
            title: 'Our Values',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            icon: 'fa-solid fa-heart',
            title: 'Our Mission',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
    ];
    return (
        <>
            <div className="container my-5">
                <div className="row g-4">
                    {cards.map((card, index) => (
                        <div className="col-12" key={index}>
                            <div className="p-4 shadow-sm d-flex flex-column flex-md-row gap-5">
                                <div>
                                    <i className={`${card.icon} fa-3x mb-3`} style={{ color: '#f4511e' }}></i>
                                </div>
                                <div>
                                    <h5>{card.title}</h5>
                                    <p>{card.text}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Card;