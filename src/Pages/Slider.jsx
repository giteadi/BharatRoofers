import React, { useState } from 'react';
import { TiArrowLeftOutline, TiArrowRightOutline } from 'react-icons/ti';

const Slider = () => {
  const slides = [
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Taj_Mahal_Palace_Hotel.jpg/1280px-Taj_Mahal_Palace_Hotel.jpg',
      linkUrl: 'https://en.wikipedia.org/wiki/Taj_Hotels',
      altText: 'Taj Hotels',
    },
    {
      imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/579305271.jpg?k=8b754a6d7e0173eaf257c44546ddfc4dae89779dbec227b2e3ad09bfbc59d726&o=&hp=1',
      linkUrl: 'https://www.americanexpress.com/en-us/travel/discover/brand/taj-hotels-resorts-and-palaces',
      altText: 'Taj Hotels and Resorts',
    },
    {
      imageUrl: 'https://www.kayak.com/rimg/himg/28/fc/28/revato-4161-12304622-397636.jpg?width=2160&height=1215&crop=true&outputtype=webp',
      linkUrl: 'https://www.cntraveler.com/hotels/san-francisco/taj-campton-place',
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
    <div className="relative max-w-screen-lg mx-auto mt-4 ">
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:shadow-blue-400 hover:shadow-2xl">
        <div className="w-full h-auto">
          <a
            href={slides[currentSlide].linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-auto"
          >
            <img
              src={slides[currentSlide].imageUrl}
              alt={slides[currentSlide].altText}
              className="w-full h-full object-cover "
            />
          </a>
          {/* Remove the caption display */}
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow-md"
          onClick={prevSlide}
        >
          <TiArrowLeftOutline className="text-gray-700 w-6 h-6" />
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow-md"
          onClick={nextSlide}
        >
          <TiArrowRightOutline className="text-gray-700 w-6 h-6" />
        </button>
      </div>
      <div className="mt-4 text-center text-gray-600">
        <p className="text-2xl font-semibold mb-2">Completed Projects</p>
        {/* <p className="text-sm">
          Explore some of our completed projects that showcase our dedication to craftsmanship and quality.
        </p> */}
      </div>
    </div>
  );
};

export default Slider;
