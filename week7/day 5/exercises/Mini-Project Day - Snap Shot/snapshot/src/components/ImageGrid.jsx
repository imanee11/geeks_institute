import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";

const API_KEY = "HSKvqJTNwiaKlIWWcrPKjDuB0IiVlHILyXbwrboPjav8B0rsWo4VMyCg"; 

const ImageGrid = ({ query }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=30`, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => setImages(data.photos))
            .catch((err) => console.error(err));
    }, [query]);

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img) => (
                <ImageCard key={img.id} image={img} />
            ))}
        </div>
    );
};

export default ImageGrid;
