import React, { useEffect, useState } from 'react';

const Clock = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    function tick() {
        setCurrentDate(new Date())
    }

    useEffect(() => {
        const timer = setInterval(tick, 1000)

        return () => clearInterval(timer);
    }, [])

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Hello, world!</h2>
            <p style={{ fontSize: '24px' }}>
                it is {currentDate.toLocaleTimeString()} 
            </p>
        </div>
    );
};

export default Clock;