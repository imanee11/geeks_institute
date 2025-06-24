import React, { useState } from 'react';

const API_KEY = '38f4b6d9302b30d24d4c7bbc3e6fe4c2';

export default function WeatherPage() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [favorites, setFavorites] = useState(
        () => JSON.parse(localStorage.getItem('favorites') || '[]')
    );
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchWeather = async () => {
        if (!city.trim()) return;
        setLoading(true);
        setError('');
        setWeather(null);

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_KEY}&units=metric`
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

    const addFavorite = () => {
        if (!weather) return;
        if (favorites.some(f => f.id === weather.id)) return;
        const newFav = [...favorites, { id: weather.id, name: weather.name }];
        setFavorites(newFav);
        localStorage.setItem('favorites', JSON.stringify(newFav));
    };

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Search Weather</h1>
            <div className="flex gap-2 mb-4">
                <input
                    className="border rounded flex-1 px-3 py-2"
                    placeholder="City name"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && fetchWeather()}
                />
                <button
                    className="bg-blue-500 text-white px-4 rounded"
                    onClick={fetchWeather}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            {weather && (
                <div className="border rounded p-4 bg-gray-50">
                    <h2 className="text-lg font-semibold">{weather.name}</h2>
                    <p>{weather.main.temp}°C</p>
                    <p>{weather.weather[0].description}</p>
                    <button
                        className="mt-2 underline text-blue-600"
                        onClick={addFavorite}
                    >
                        Add to Favorites
                    </button>
                </div>
            )}
        </div>
    );
}
