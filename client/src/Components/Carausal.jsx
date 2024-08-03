import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const Carousel = () => {
  const [properties, setProperties] = useState([]);
  const [propertyImages, setPropertyImages] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('https://bharatroofers.com/api/property/getAllProperty');
        setProperties(response.data.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    const fetchPropertyImages = async () => {
      try {
        const response = await axios.get('https://bharatroofers.com/api/property/getAllPropertyImages');
        const { data } = response.data;
        setPropertyImages(data);
      } catch (error) {
        console.error('Error fetching property images:', error);
      }
    };

    fetchProperties();
    fetchPropertyImages();
  }, []);

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

  const getImageForProperty = (propertyId) => {
    const images = propertyImages.filter(img => img.property_id === propertyId.toString());
    return images.length > 0 ? images[0].image : null;
  };

  return (
    <div className="py-5 relative">
      <Slider {...settings}>
        {properties.map((property, index) => (
          <div key={index} className="px-2">
            <img
              src={getImageForProperty(property.id) || 'default_image_path'} // replace 'default_image_path' with actual default image path
              alt={`Property ${property.id}`}
              className="w-full h-48 object-cover rounded-md transition-all duration-500 grayscale hover:grayscale-0 hover:scale-[1.01] hover:cursor-pointer"
            />
            <div className="text-center mt-2">
              <h3 className="text-lg font-bold">{property.property_name}</h3>
              <p className="text-sm text-gray-500">{property.price}</p>
            </div>
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
