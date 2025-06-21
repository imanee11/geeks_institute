import { useState } from "react";

export default function ColumnLeft() {
    const [images, setImages] = useState([]);

    const handleClick = () => {
        fetch("https://dog.ceo/api/breeds/image/random/2")
            .then((res) => res.json())
            .then((data) => setImages(data.message));
    };

    return (
        <div className="p-4 bg-blue-50 rounded shadow">
            <h2 className="font-bold mb-2">Column Left</h2>
            <button onClick={handleClick} className="bg-blue-600 text-white px-3 py-1 rounded">
                Get images
            </button>
            <div className="mt-3 space-y-2">
                {images.map((img, index) => (
                    <img key={index} src={img} alt="dog" className="rounded" />
                ))}
            </div>
        </div>
    );
}
