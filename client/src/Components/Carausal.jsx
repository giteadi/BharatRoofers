import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
    autoplaySpeed: 2000,
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
      {
        breakpoint: 639, // Added for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const getImageForProperty = (propertyId) => {
    const images = propertyImages.filter(img => img.property_id === propertyId.toString());
    return images.length > 0 ? images[0].image : 'default_image_path'; // Replace with actual default image path
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {properties.map((property, index) => (
          <div key={index} className="px-2">
            <Link to={`/property/${property.id}`}>
              <img
                src={getImageForProperty(property.id)}
                alt={`Property ${property.id}`}
                className="w-full h-56 object-cover rounded-md transition-all duration-500 grayscale hover:grayscale-0 hover:scale-105 hover:cursor-pointer"
              />
            </Link>
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
