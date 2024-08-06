import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CarouselSlider = ({ images, propertyName, address, price, datePosted, ids }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleImageClick = () => {
    navigate(`/property/${ids[currentIndex]}`);
  };

  return (
    <div className="relative min-w-[300px] max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-5 flex flex-col" style={{ width: '500px' }}>
      <div className="relative h-64">
        <div className="w-full h-full overflow-hidden">
          <img
            src={images[currentIndex]}
            className="w-full h-full object-cover cursor-pointer"
            alt={`Carousel Image ${currentIndex + 1}`}
            onClick={handleImageClick}
          />
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
            onClick={prevSlide}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
            onClick={nextSlide}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{propertyName[currentIndex]}</h2>
        <p className="text-gray-600 truncate">
          {address[currentIndex]}
        </p>
        <p className="text-gray-800">Price: {price[currentIndex]}</p>
        <p className="text-gray-800">Date: {new Date(datePosted[currentIndex]).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default CarouselSlider;
