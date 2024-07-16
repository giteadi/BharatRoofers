import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-12" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">About Us</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            BharatRoofers is a premier real estate company dedicated to helping you find your dream home.
          </p>
        </div>
        <div className="mt-8">
          <p className="text-lg text-gray-700 text-center">
            Our team of experienced professionals is committed to providing exceptional service and support
            throughout the home buying process. Whether you're looking to buy, rent, or sell, we have the
            expertise and resources to help you achieve your goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
