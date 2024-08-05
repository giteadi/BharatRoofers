import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import CarouselSlider from "./CarouselSlider";
import CarouselPlaceholder from "./CarouselPlaceholder";

export default function MostViewed() {
  const [properties, setProperties] = useState([]);
  const [propertiesImages, setPropertiesImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllProperties = async () => {
    try {
      const response = await axios.get('https://bharatroofers.com/api/property/getMostVisitedProperties');
      setProperties(response.data.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const getAllPropertiesImages = async () => {
    try {
      const response = await axios.get('https://bharatroofers.com/api/property/getAllPropertyImages');
      setPropertiesImages(response.data.data);
    } catch (error) {
      console.error('Error fetching property images:', error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or error
    }
  };

  useEffect(() => {
    getAllProperties();
    getAllPropertiesImages();
  }, []);

  const images = properties.map(property => {
    const matchingImages = propertiesImages.filter(image => image.property_id == property.id);
    return matchingImages && matchingImages.length > 0 ? matchingImages[0].image : "https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg?t=st=1701323109~exp=1701326709~hmac=da85cae6601708a5416a585b78ba630517ba8a0b698f72df228ae5ae10f58c58&w=900";
  });

  const titles = properties.map(property => property.property_name);

  return (
    <Wrapper>
      <div className="mb-4">
        <span className='font-bold flex items-center justify-center text-3xl text-center mb-6 md:mb-8 mt-6'>Our Property</span>
        <section className='flex justify-around items-center flex-wrap'>
          {['Recommended Property', 'Most View', 'Recent Projects'].map((title, index) => (
            <div key={index}>
              <p className='text-2xl font-bold flex items-center justify-center'>{title}</p>
              {loading ? (
                <CarouselPlaceholder />
              ) : (
                index === 1 ? (
                  <CarouselSlider titles={titles} images={images} />
                ) : (
                  <CarouselPlaceholder /> // Placeholder for other sections, replace as needed
                )
              )}
            </div>
          ))}
        </section>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  // Your styled component code
`;
