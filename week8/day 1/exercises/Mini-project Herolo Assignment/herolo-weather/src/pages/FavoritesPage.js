import React, { useState } from 'react';

const API_KEY = '38f4b6d9302b30d24d4c7bbc3e6fe4c2';

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState(
        () => JSON.parse(localStorage.getItem('favorites') || '[]')
    );
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const loadWeather = async id => {
        setLoading(true);
        setError('');
        setWeather(null);
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`
            );
            const data = await res.json();
            if (data.cod !== 200) setError(data.message);
            else setWeather(data);
        } catch {
            setError('Network error');
        } finally {
            setLoading(false);
        }
    };

    const removeFav = id => {
        const newFav = favorites.filter(f => f.id !== id);
        setFavorites(newFav);
        localStorage.setItem('favorites', JSON.stringify(newFav));
        if (weather?.id === id) setWeather(null);
    };

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Favorites</h1>

            {favorites.length === 0 && <p>No favorites yet.</p>}

            <ul className="space-y-2 mb-4">
                {favorites.map(f => (
                    <li key={f.id} className="flex justify-between items-center">
                        <span
                            className="cursor-pointer text-blue-600 hover:underline"
                            onClick={() => loadWeather(f.id)}
                        >
                            {f.name}
                        </span>
                        <button
                            className="text-red-500 hover:underline"
                            onClick={() => removeFav(f.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            {loading && <p>Loading weather...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {weather && (
                <div className="border rounded p-4 bg-gray-50">
                    <h2 className="text-lg font-semibold">{weather.name}</h2>
                    <p>{weather.main.temp}°C</p>
                    <p>{weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}
