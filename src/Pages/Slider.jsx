import React, { useState } from 'react';
import { TiArrowLeftOutline, TiArrowRightOutline } from 'react-icons/ti';

const Slider = () => {
  const slides = [
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Taj_Mahal_Palace_Hotel.jpg/1280px-Taj_Mahal_Palace_Hotel.jpg',
      linkUrl: '',
      altText: 'Taj Hotels',
    },
    {
      imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/579305271.jpg?k=8b754a6d7e0173eaf257c44546ddfc4dae89779dbec227b2e3ad09bfbc59d726&o=&hp=1',
      linkUrl: '',
      altText: 'Taj Hotels and Resorts',
    },
    {
      imageUrl: 'https://www.kayak.com/rimg/himg/28/fc/28/revato-4161-12304622-397636.jpg?width=2160&height=1215&crop=true&outputtype=webp',
      linkUrl: '',
      altText: 'Taj Campton Place',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative max-w-screen-lg mx-auto mt-4">
      <div className="relative overflow-hidden rounded-lg shadow-sm transition-transform duration-300 ease-in-out transform hover:shadow-grey-400 hover:shadow-2xl">
        <div className="w-full h-auto">
          <a
            href={slides[currentSlide].linkUrl}
            rel="noopener noreferrer"
            className="block w-full h-auto"
          >
            <img
              src={slides[currentSlide].imageUrl}
              alt={slides[currentSlide].altText}
              className="w-full h-full object-cover"
            />
          </a>
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full shadow-md bg-white"
          onClick={prevSlide}
        >
          <TiArrowLeftOutline className="text-gray-700 w-6 h-6" />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full shadow-md bg-white"
          onClick={nextSlide}
        >
          <TiArrowRightOutline className="text-gray-700 w-6 h-6" />
        </button>
      </div>
      <div className="mt-4 text-center text-gray-600">
        <p className="text-2xl font-semibold mb-2">Completed Projects</p>
      </div>
    </div>
  );
};

export default Slider;
