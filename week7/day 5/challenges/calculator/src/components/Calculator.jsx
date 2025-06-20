import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const [operation, setOperation] = useState('add')
    const [result, setResult] = useState(null);

    const calculate = () => {
        const a = parseFloat(num1);
        const b = parseFloat(num2)

        if (isNaN(a) || isNaN(b)) {
            setResult('Please enter valid numbers')
            return;
        }

        switch (operation) {
            case 'add':
                setResult(a + b);
                break;

            case 'subtract':
                setResult(a - b);
                break;
            case 'multiply':
                setResult(a * b);
                break;
            case 'divide':
                setResult(b !== 0 ? a / b : 'Cannot divide by zero');
                break;
            default:
                setResult('Invalid operation');
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FEEBF6]/50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-2xl font-bold text-[#687FE5] text-center mb-4">Calculator</h1>

                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Enter first number"
                    className="w-full mb-3 p-2 border rounded"
                />

                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Enter second number"
                    className="w-full mb-3 p-2 border rounded"
                />

                <select
                    value={operation}
                    onChange={(e) => setOperation(e.target.value)}
                    className="w-full mb-4 p-2 border rounded"
                >
                    <option value="add">Add</option>
                    <option value="subtract">Subtract</option>
                    <option value="multiply">Multiply</option>
                    <option value="divide">Divide</option>
                </select>

                <button
                    onClick={calculate}
                    className="w-full bg-[#687FE5] hover:bg-[#687FE5]/75 text-white font-semibold py-2 px-4 rounded"
                >
                    Calculate
                </button>

                {result !== null && (
                    <div className="mt-4 text-center text-[16px] font-semibold text-[#687FE5] ">
                        Result: {result}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calculator;