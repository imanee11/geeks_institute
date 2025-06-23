import React, { useRef, useState } from 'react';

const CharacterCounter = () => {
    const inputRef = useRef(null);          
    const [charCount, setCharCount] = useState(0); 

    const handleInput = () => {
        const length = inputRef.current.value.length;
        setCharCount(length);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <input
                type="text"
                ref={inputRef}
                onInput={handleInput}
                placeholder="type something..."
                style={{ padding: '0.5rem', fontSize: '1rem', width: '250px' }}
            />
            <p>Character Count: {charCount}</p>
        </div>
    );
};

export default CharacterCounter;
