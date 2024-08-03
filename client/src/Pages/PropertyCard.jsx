import React, { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaHome, FaTelegram, FaWhatsapp, FaFacebookMessenger, FaTwitter, FaInstagram, FaRupeeSign } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Box from "../Components/LightBox";
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

// Heartbeat animation
const heartbeat = keyframes`
  0% { transform: scale(1); }
  20% { transform: scale(1.2); }
  40% { transform: scale(1); }
  60% { transform: scale(1.2); }
  80% { transform: scale(1); }
  100% { transform: scale(1); }
`;

const HeartbeatButton = styled.button`
  background-color: #48bb78; /* Tailwind's green-500 */
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem; /* Tailwind's rounded */
  transition: background-color 0.3s, transform 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #2f855a; /* Tailwind's green-600 */
    transform: scale(1.05);
  }

  &.heartbeat {
    animation: ${heartbeat} 5s infinite;
  }
`;

const PropertyCard = () => {
  const formRef = useRef(null);
  const { id } = useParams();
  const [properties, setProperties] = useState([]);
  const [propertyImages, setPropertyImages] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

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
        console.log('Fetched data:', data);  // Log the data to verify
        setPropertyImages(data);
      } catch (error) {
        console.error('Error fetching property images:', error);
      }
    };

    fetchProperties();
    fetchPropertyImages();
  }, []);

  useEffect(() => {
    if (properties.length > 0 && propertyImages.length > 0) {
      const property = properties.find(p => p.id === parseInt(id));
      if (property) {
        const images = propertyImages
          .filter(img => img.property_id === property.id.toString())
          .map(img => img.image); // Extract only the image URLs
        setSelectedProperty({ ...property, images });
      }
    }
  }, [properties, propertyImages, id]);

  if (!selectedProperty) {
    return <div>Loading...</div>;
  }

  const {
    property_name: title = "",
    price = "",
    description = "",
    ownerDetails = {},
    amenities = [],
    about = {}
  } = selectedProperty;

  function formSubmit(e) {
    e.preventDefault();
    toast.success("Form submitted successfully");
  }

  function scrollToForm() {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="max-w-full px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-700 mb-2">{title}</h1>
          <p className="text-xl text-gray-500 mb-2 flex items-center">Price:<FaRupeeSign /> {price}</p>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="mr-2 text-gray-600" />
            <p className="text-lg text-gray-600">{description}</p>
          </div>

          {/* Lightbox image */}
          <div className="bg-gray-100">
            <Box images={selectedProperty.images} />
          </div>

          <div className="flex mt-4">
            {/* Main Content */}
            <div className="w-full pr-4 flex flex-col justify-between">
              {/* Social media */}
              <div className="flex gap-5 items-center mb-4">
                <p className="font-semibold text-2xl text-gray-700">Share:</p>
                <FaTelegram className="cursor-pointer hover:animate-bounce text-blue-500" size={32} />
                <FaWhatsapp className="cursor-pointer hover:animate-bounce text-green-500" size={32} />
                <FaFacebookMessenger className="cursor-pointer hover:animate-bounce text-blue-600" size={32} />
                <FaTwitter className="cursor-pointer hover:animate-bounce text-blue-400" size={32} />
                <FaInstagram className="cursor-pointer hover:animate-bounce text-pink-500" size={32} />
                <div className="ml-auto">
                  <HeartbeatButton
                    className="heartbeat"
                    onClick={() => {
                      scrollToForm();
                      toast.success("Scrolling to Contact Form");
                    }}
                  >
                    Contact us
                  </HeartbeatButton>
                </div>
              </div>

              {/* Property details */}
              <div className="mt-5 p-2">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Property Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Property detail items */}
                  <DetailItem icon={FaHome} label={`Property Id: ${selectedProperty.propertyId || "N/A"}`} color="text-green-500" />
                  <DetailItem icon={FaHome} label={`Type: ${selectedProperty.type || "N/A"}`} color="text-green-500" />
                  <DetailItem icon={FaHome} label={`Commercial Property Type: ${selectedProperty.commercialPropertyType || "N/A"}`} color="text-green-500" />
                  <DetailItem icon={FaHome} label={`Property For: ${selectedProperty.propertyFor || "N/A"}`} color="text-green-500" />
                  <DetailItem icon={FaHome} label={`New/Resale: ${selectedProperty.newOrResale || "N/A"}`} color="text-green-500" />
                  <DetailItem icon={FaHome} label={`TNCP Approved: ${selectedProperty.tncpApproved || "N/A"}`} color="text-green-500" />
                  <DetailItem icon={FaHome} label={`RERA Number: ${selectedProperty.reraNumber || "N/A"}`} color="text-green-500" />
                  <DetailItem icon={FaHome} label={`Square Feet: ${selectedProperty.squareFeet || "N/A"}`} color="text-green-500" />
                  <DetailItem icon={FaHome} label={`Dimension: ${selectedProperty.dimension || "N/A"}`} color="text-green-500" />
                  <DetailItem icon={FaHome} label={`Car Parking: ${selectedProperty.carParking || "N/A"}`} color="text-green-500" />
                  <DetailItem icon={FaHome} label={`Year Built: ${selectedProperty.yearBuilt || "N/A"}`} color="text-green-500" />
                  <DetailItem icon={FaHome} label={`Facing: ${selectedProperty.facing || "N/A"}`} color="text-green-500" />
                  <DetailItem icon={FaHome} label={`Flooring: ${selectedProperty.flooring || "N/A"}`} color="text-green-500" />
                  <DetailItem icon={FaHome} label={`Age of Property: ${selectedProperty.ageOfProperty || "N/A"}`} color="text-green-500" />
                  <DetailItem icon={FaHome} label={`Lift: ${selectedProperty.lift || "N/A"}`} color="text-green-500" />
                </div>
              </div>

              {/* Owner details */}
              <div className="mt-5 p-2">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Owner Details</h2>
                <p className="text-gray-600">Name: {ownerDetails.name || "N/A"}</p>
                <p className="text-gray-600">Properties Listed: {ownerDetails.propertiesListed || "N/A"}</p>
                <p className="text-gray-600">Localities: {ownerDetails.localities ? ownerDetails.localities.join(', ') : "N/A"}</p>
                <p className="text-gray-600">Phone Number: {ownerDetails.phoneNumber || "N/A"}</p>
              </div>

              {/* Amenities */}
              <div className="mt-5 p-2">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Amenities</h2>
                <ul className="list-disc pl-6 text-gray-600">
                  {amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>

              {/* About */}
              <div className="mt-5 p-2">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">About</h2>
                <p className="text-gray-600">{about.details || "N/A"}</p>
              </div>

              {/* Contact Form */}
              <div className="my-10 p-4 bg-gray-50 rounded-lg w-1/2 mx-auto" ref={formRef}>
  <h2 className="text-2xl font-bold text-gray-700 mb-4">Contact Us</h2>
  <form onSubmit={formSubmit} className="space-y-4">
    {/* Property Id and Name Fields in Same Row */}
    <div className="flex space-x-4 mb-4">
      {/* Property Id Field */}
      <div className="flex-1">
        <label htmlFor="propertyId" className="font-semibold mb-1 block">Property Id:</label>
        <input
          name="propertyId"
          value={id || ""}
          id="propertyId"
          className="w-full p-2 border border-gray-300 rounded"
          readOnly
        />
      </div>

      {/* Property Name Field */}
      <div className="flex-1">
        <label htmlFor="propertyName" className="font-semibold mb-1 block">Property Name:</label>
        <input
          name="propertyName"
          value={title || ""}
          id="propertyName"
          className="w-full p-2 border border-gray-300 rounded"
          readOnly
        />
      </div>
    </div>

    {/* Name Field */}
    <div className="flex flex-col mb-4">
      <label htmlFor="name" className="font-semibold mb-1">Your Name:</label>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        id="name"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
    </div>

    {/* Email Field */}
    <div className="flex flex-col mb-4">
      <label htmlFor="email" className="font-semibold mb-1">Your Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        id="email"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
    </div>

    {/* Message Field */}
    <div className="flex flex-col mb-4">
      <label htmlFor="message" className="font-semibold mb-1">Your Message:</label>
      <textarea
        name="message"
        placeholder="Your Message"
        id="message"
        rows="4"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-2 bg-green-500 text-white rounded"
    >
      Submit
    </button>
  </form>
</div>

            </div>
          </div>

          {/* Additional section */}
          <div className="mt-5 p-2">
            <p className="text-gray-600">Any additional section</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ icon: Icon, label, color }) => (
  <div className="flex items-center">
    <Icon className={`mr-2 ${color}`} />
    <p className="text-gray-600">{label}</p>
  </div>
);

export default PropertyCard;
