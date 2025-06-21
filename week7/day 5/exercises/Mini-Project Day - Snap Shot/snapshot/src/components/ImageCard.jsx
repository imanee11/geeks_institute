const ImageCard = ({ image }) => {
    return (
        <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <img
                src={image.src.large}
                alt={image.photographer}
                className="w-full h-64 object-cover"
            />
            {/* <div className="p-2 bg-white text-sm text-gray-700">
                Photo by: {image.photographer}
            </div> */}
        </div>
    );
};

export default ImageCard;
