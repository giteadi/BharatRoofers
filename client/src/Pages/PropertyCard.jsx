import React, { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaHome, FaTelegram, FaWhatsapp, FaFacebookMessenger, FaTwitter, FaInstagram } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Box from "../Components/LightBox";
import axios from 'axios';

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
    title = "",
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
        <div className="flex flex-col text-xl font-semibold text-gray-700 mb-4 m-5">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="mr-4">Price: ${price}</p>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" />
            <p>{description}</p>
          </div>
        </div>

        {/* Lightbox image */}
        <div className="bg-gray-100">
          <Box images={selectedProperty.images} />
        </div>

        <div className="flex p-6">
          {/* Main Content */}
          <div className="w-2/3 pr-4">
            {/* Social media */}
            <div className="flex gap-5 items-center">
              <p className="font-semibold text-2xl">Share:</p>
              <FaTelegram className="cursor-pointer hover:animate-bounce text-blue-500" size={32} />
              <FaWhatsapp className="cursor-pointer hover:animate-bounce text-green-500" size={32} />
              <FaFacebookMessenger className="cursor-pointer hover:animate-bounce text-blue-600" size={32} />
              <FaTwitter className="cursor-pointer hover:animate-bounce text-blue-400" size={32} />
              <FaInstagram className="cursor-pointer hover:animate-bounce text-pink-500" size={32} />
            </div>

            {/* Property details */}
            <div className="mt-5 p-1">
              <h2 className="text-xl font-semibold mb-4">Property Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <div className="mt-5 p-1">
              <h2 className="text-xl font-semibold mb-4">Owner Details</h2>
              <p>Name: {ownerDetails.name || "N/A"}</p>
              <p>Properties Listed: {ownerDetails.propertiesListed || "N/A"}</p>
              <p>Localities: {ownerDetails.localities ? ownerDetails.localities.join(', ') : "N/A"}</p>
              <p>Phone Number: {ownerDetails.phoneNumber || "N/A"}</p>
            </div>

            {/* Amenities */}
            <div className="mt-5 p-1">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {amenities.map((amenity, index) => (
                  <DetailItem key={index} icon={amenity.icon} label={amenity.label} color="text-green-500" />
                ))}
              </div>
            </div>

            {/* About */}
            <div className="mt-5 p-1">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p>{about.text || "N/A"}</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="w-1/3 border-l border-gray-300 pl-4">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <form ref={formRef} onSubmit={formSubmit} className="flex flex-col">
              <input type="text" placeholder="Name" className="mb-2 p-2 border border-gray-300 rounded" />
              <input type="email" placeholder="Email" className="mb-2 p-2 border border-gray-300 rounded" />
              <input type="text" placeholder="Phone Number" className="mb-2 p-2 border border-gray-300 rounded" />
              <textarea placeholder="Message" className="mb-2 p-2 border border-gray-300 rounded"></textarea>
              <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
            </form>
            <button onClick={scrollToForm} className="mt-4 text-blue-500 hover:underline">Scroll to Form</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ icon: Icon, label, color }) => (
  <div className="flex items-center text-xl">
    <Icon className={`mr-2 ${color}`} />
    <p>{label}</p>
  </div>
);

export default PropertyCard;
