import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic1 from '../Assets/blog1.avif';
import pic2 from '../Assets/blog2.avif';
import pic3 from '../Assets/blog3.avif';
import pic4 from '../Assets/blog4.avif';

const Carousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 979,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const images = [pic1, pic2, pic3, pic4];

  return (
    <div className="py-5 relative">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-48 object-cover rounded-md transition-all duration-500 grayscale hover:grayscale-0 hover:scale-[1.01]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom arrow components
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer bg-white rounded-full shadow-md p-2 z-10"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer bg-white rounded-full shadow-md p-2 z-10"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

export default Carousel;
