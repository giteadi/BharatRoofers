import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { CardContainer, CardBody, CardItem } from './CardComponet';

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
        breakpoint: 639,
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
        {properties.slice(0, 10).map((property, index) => (
          <div key={index} className="px-2">
            <Link to={`/property/${property.id}`}>
              <CardContainer className="hover:cursor-pointer">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border min-w-[300px]">
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                    {property.property_name}
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    {property.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <div className="relative h-60 w-full">
                      <img
                        src={getImageForProperty(property.id)}
                        alt={`Property ${property.id}`}
                        className="absolute inset-0 h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      />
                    </div>
                  </CardItem>
                  <div className="flex justify-between items-center mt-4">
                    <CardItem translateZ={20} as={Link} to={`/property/${property.id}`} className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                      View Details →
                    </CardItem>
                    <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                      Contact
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </Link>
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
