import React, { useState } from 'react';

const CarouselSlider = ({ images, propertyName, address, price, datePosted }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative min-w-[500px]  max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-5 flex flex-col flex-wrap">
      <div className="relative" style={{ height: '300px' }}>
        <div className="w-full h-full overflow-hidden">
          <img
            src={images[currentIndex]}
            className="w-full h-full object-cover"
            alt={`Carousel Image ${currentIndex + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
        <p className="text-gray-600 max-w-full overflow-hidden text-ellipsis whitespace-nowrap" style={{ maxWidth: '100%' }}>
          {address[currentIndex]}
        </p>
        <p className="text-gray-800">Price: {price[currentIndex]}</p>
        <p className="text-gray-800">Date: {new Date(datePosted[currentIndex]).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default CarouselSlider;
