import React from 'react';

const Header = () => {
    return (
        <>
            <nav className=" text-center p-4" style={{ backgroundColor: '#f4511e', color: 'white' }}>
                <div className="text-light text-center">
                    <h1 className='text-center'>Company</h1>
                    <p className='text-center'>We specialise in something ...</p>
                </div>
            </nav>

        </>
    );
};

export default Header;