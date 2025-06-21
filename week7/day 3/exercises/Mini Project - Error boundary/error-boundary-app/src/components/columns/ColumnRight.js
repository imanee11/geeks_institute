import { useState } from "react";

export default function ColumnRight() {
    const [text, setText] = useState({ function: "I live to crash" });

    const handleCrash = () => {
        setText({ function: "I live to crash" });
    };

    const handleConsoleError = () => {
        throw new Error("This error was thrown in an event handler");
    };

    return (
        <div className="p-4 bg-green-50 rounded shadow">
            <h2 className="font-bold mb-2">Column Right</h2>
            <p>Everything is working fine...</p>
            <ErrorParagraph text={text} />

            <button onClick={handleCrash} className="bg-red-600 text-white px-3 py-1 rounded mr-2 mt-2">
                Replace string with object
            </button>
            <button onClick={handleConsoleError} className="bg-yellow-500 text-white px-3 py-1 rounded mt-2">
                Invoke event handler
            </button>
        </div>
    );
}

function ErrorParagraph({ text }) {
    return <p>{text}</p>; 
}
