import React, { useState } from 'react';
import { countries } from './Countries.js'

const AutocompleteText = () => {

    const [inputValue, setInputValue] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value)

        const filtred = countries.filter(country => country.toLowerCase().startsWith(value.toLowerCase()))

        setSuggestions(filtred)
    }

    const handleSuggestionClick = (country) => {
        setInputValue(country)
        setSuggestions([])
    }

    return (
        <div className='w-[60vw] bg-red-200/20 mx-auto p-5 rounded-xl'>
            <h1 className='text-center pb-3 font-bold text-[16px]'>Country Search</h1>
            <input className='border-[1px] border-red-500/50 bg-transparent rounded-[5px] w-full px-3 py-2 border-[#000] placeholder:text-black/50 placeholder:text-[13px]' type="text" value={inputValue} onChange={handleInputChange} placeholder='type a country...' />

            {suggestions.length > 0 && (
                <ul className=" mt-2 bg-transparent rounded max-h-60 overflow-y-auto">
                    {suggestions.map((country, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(country)}
                            className="cursor-pointer px-4 py-2 hover:bg-red-100"
                        >
                            {country}
                        </li>
                    ))}
                </ul>
            )}

            <div className='pt-5 text-[13px]'>
                suggestions : {suggestions.length}
            </div>

        </div>
    );
};

export default AutocompleteText;