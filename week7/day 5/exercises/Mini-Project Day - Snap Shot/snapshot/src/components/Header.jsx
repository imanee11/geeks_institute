import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();


    const handleSearch = () => {
        if (search.trim()) navigate(`/search/${search}`);
        setSearch("");
    };

    const categories = ["Mountain", "Beaches", "Birds", "Food"];

    return (
        <>
            <header className="text-center py-6 bg-white">
                <h1 className="text-3xl font-bold mb-4">SnapShot</h1>
                <div className="flex justify-center gap-2 mb-4">
                    <input
                        type="text"
                        className="border px-4 py-2 rounded-md"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
                <div className="flex justify-center gap-4 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => navigate(`/${cat.toLowerCase()}`)}
                            className="text-blue-600 hover:underline"
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

        </>
    );
};

export default Header;