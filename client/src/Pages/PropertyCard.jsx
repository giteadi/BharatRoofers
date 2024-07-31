import React from "react";
import toast from "react-hot-toast";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaHome,
  FaCalendarAlt,
  FaClipboardCheck,
  FaLongArrowAltRight,
  FaDollarSign,
  FaCar,
  FaLightbulb,
  FaRoad,
  FaWater,
  FaSun,
  FaTelegram,
  FaWhatsapp,
  FaFacebookMessenger,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import Box from "../Components/LightBox";
import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import axios from 'axios'
const PropertyCard = () => {
  const { id } = useParams();
  const formRef = React.useRef(null);
  const imageArray = [
    {
      id: 1,
      link: "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-1.png",
      title: "Silver Park",
      description: "3 BHK House in Vijay Nagar, Jabalpur",
      price: "240000",
      status: "Ready to Move",
      propertyDetails: {
        area: "2000 sq.ft",
        configuration: "3 Bedrooms, 3 Bathrooms, 1 Balcony",
        address: "Vijay Nagar, Jabalpur",
        floors: "3 Floors",
        possession: "Immediate",
        status: "Available",
        ownership: "Freehold",
        furnishing: "Semi-Furnished",
        parking: "2 Covered",
      },
      ownerDetails: {
        name: "Rahul Sharma",
        propertiesListed: 3,
        localities: ["Vijay Nagar", "Jabalpur City"],
        phoneNumber: "9876543210",
      },
      amenities: [
        { icon: FaLightbulb, label: "Lights" },
        { icon: FaRoad, label: "Road" },
        { icon: FaWater, label: "Drainage" },
        { icon: FaSun, label: "Road Light" },
      ],
      about: {
        location: "Chowkital Lamheta Ghat Main Road",
        approval: "TNCP (Town And Country Planning) Approved",
        type: "Market With Shops Available",
        minimumPrice: "24 Lakhs",
      },
      propertyId: 101,
      type: "Residential",
      commercialPropertyType: undefined,
      propertyFor: "Sale",
      newOrResale: "New",
      tncpApproved: "Yes",
      reraNumber: "RERA1234",
      squareFeet: "2000 sq.ft",
      dimension: "40x50",
      carParking: "2 Covered",
      yearBuilt: "2010",
      facing: "East",
      flooring: "Marble",
      ageOfProperty: "10 years",
      lift: "Yes",
    },
    {
      id: 2,
      link: "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-2.png",
      title: "Another Property",
      description: "Description of another property",
      price: "$500,000",
      status: "Under Construction",
      propertyDetails: {
        area: "1500 sq.ft",
        configuration: "4 Bedrooms, 3 Bathrooms, No Balcony",
        address: "Central Avenue, Jabalpur",
        floors: "2 Floors",
        possession: "Within 12 months",
        status: "Available for Sale",
        ownership: "Leasehold",
        furnishing: "Unfurnished",
        parking: "1 Covered",
      },
      ownerDetails: {
        name: "Sneha Patel",
        propertiesListed: 2,
        localities: ["Central Avenue", "Jabalpur City"],
        phoneNumber: "9876543211",
      },
      propertyId: 102,
      type: "Residential",
      commercialPropertyType: undefined,
      propertyFor: "Sale",
      newOrResale: "New",
      tncpApproved: "No",
      reraNumber: "RERA5678",
      squareFeet: "1500 sq.ft",
      dimension: "30x50",
      carParking: "1 Covered",
      yearBuilt: "2022",
      facing: "West",
      flooring: "Tiles",
      ageOfProperty: "2 years",
      lift: "No",
    },
    {
      id: 3,
      link: "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-3.png",
      title: "Luxury Villa",
      description: "4 BHK Villa with pool in Prime Location",
      price: "$1,200,000",
      status: "Ready to Move",
      propertyDetails: {
        area: "4000 sq.ft",
        configuration: "4 Bedrooms, 5 Bathrooms, 2 Balconies",
        address: "Prime Location, Jabalpur",
        floors: "4 Floors",
        possession: "Immediate",
        status: "Available",
        ownership: "Freehold",
        furnishing: "Fully Furnished",
        parking: "3 Covered",
      },
      ownerDetails: {
        name: "Akash Verma",
        propertiesListed: 1,
        localities: ["Prime Location", "Jabalpur City"],
        phoneNumber: "9876543212",
      },
      propertyId: 103,
      type: "Residential",
      commercialPropertyType: undefined,
      propertyFor: "Sale",
      newOrResale: "Resale",
      tncpApproved: "Yes",
      reraNumber: "RERA4321",
      squareFeet: "4000 sq.ft",
      dimension: "50x80",
      carParking: "3 Covered",
      yearBuilt: "2015",
      facing: "North",
      flooring: "Wooden",
      ageOfProperty: "9 years",
      lift: "Yes",
    },
    {
      id: 4,
      link: "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-4.png",
      title: "Cosy Apartment",
      description: "2 BHK Apartment near City Center",
      price: "$300,000",
      status: "Under Construction",
      propertyDetails: {
        area: "1000 sq.ft",
        configuration: "2 Bedrooms, 2 Bathrooms, No Balcony",
        address: "City Center, Jabalpur",
        floors: "1 Floor",
        possession: "Within 6 months",
        status: "Available for Sale",
        ownership: "Freehold",
        furnishing: "Unfurnished",
        parking: "1 Covered",
      },
      ownerDetails: {
        name: "Neha Gupta",
        propertiesListed: 4,
        localities: ["City Center", "Jabalpur City"],
        phoneNumber: "9876543213",
      },
      propertyId: 104,
      type: "Residential",
      commercialPropertyType: undefined,
      propertyFor: "Sale",
      newOrResale: "New",
      tncpApproved: "Yes",
      reraNumber: "RERA8765",
      squareFeet: "1000 sq.ft",
      dimension: "20x50",
      carParking: "1 Covered",
      yearBuilt: "2023",
      facing: "South",
      flooring: "Ceramic",
      ageOfProperty: "1 year",
      lift: "No",
    },
    {
      id: 5,
      link: "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-5.png",
      title: "Seaside Retreat",
      description: "Beachfront property with stunning views",
      price: "$2,500,000",
      status: "Ready to Move",
      propertyDetails: {
        area: "6000 sq.ft",
        configuration: "5 Bedrooms, 6 Bathrooms, 3 Balconies",
        address: "Beachfront, Jabalpur",
        floors: "2 Floors",
        possession: "Immediate",
        status: "Available",
        ownership: "Freehold",
        furnishing: "Fully Furnished",
        parking: "4 Covered",
      },
      ownerDetails: {
        name: "Rajesh Singh",
        propertiesListed: 2,
        localities: ["Beachfront", "Jabalpur City"],
        phoneNumber: "9876543214",
      },
      propertyId: 105,
      type: "Residential",
      commercialPropertyType: undefined,
      propertyFor: "Sale",
      newOrResale: "New",
      tncpApproved: "Yes",
      reraNumber: "RERA9999",
      squareFeet: "6000 sq.ft",
      dimension: "60x100",
      carParking: "4 Covered",
      yearBuilt: "2018",
      facing: "West",
      flooring: "Marble",
      ageOfProperty: "6 years",
      lift: "Yes",
    },
  ];
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips for Buying Your First Home",
      image:
        "https://media.istockphoto.com/id/178988183/photo/house-in-bad-summer-thunderstorm.webp?b=1&s=170667a&w=0&k=20&c=GCKr4PR2gErNiBLYPnH75IbcHEl1PcCVbmoqRUfCAKs=",
      link: "/blog/1",
    },
    {
      id: 2,
      title: "The Importance of Location in Real Estate",
      image:
        "https://media.istockphoto.com/id/453944565/photo/home-exterior.webp?b=1&s=170667a&w=0&k=20&c=ONvmTRg63RYsyMJTnySOLpOBZlaoUeh6a9jfYuVQ_iw=",
      link: "/blog/2",
    },
    {
      id: 3,
      title: "How to Get the Best Mortgage Rate",
      image:
        "https://media.istockphoto.com/id/178988183/photo/house-in-bad-summer-thunderstorm.webp?b=1&s=170667a&w=0&k=20&c=GCKr4PR2gErNiBLYPnH75IbcHEl1PcCVbmoqRUfCAKs=",
      link: "/blog/3",
    },
  ];
  const specialHighlights = [
    { icon: FaCar, label: "Good No. of Common/Visitor Parking" },
    { icon: FaRoad, label: "Main Road Facing" },
    { icon: FaHome, label: "Good Ceiling Height" },
    { icon: FaLightbulb, label: "Good Natural Light in the unit" },
    { icon: FaWater, label: "24/7 Bore Well Water" },
    { icon: FaCheckCircle, label: "Environment Clearance Available" }
  ];
  const relatedProperties = [
    {
      id: 1,
      title: "Silver Park",
      link: "/property/101",
      image: "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-1.png",
      description: "3 BHK House in Vijay Nagar, Jabalpur"
    },
    {
      id: 2,
      title: "Another Property",
      link: "/property/102",
      image: "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-2.png",
      description: "Description of another property"
    },
    
  ];

  const imageId = parseInt(id);

  const selectedImage = imageArray.find((image) => image.id === imageId);

  if (!selectedImage) {
    return <div>Image not found.</div>;
  }

  function formSubmit(e) {
    e.preventDefault();
    toast.success("Form submitted successfully");
  }
  function scrollToForm() {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  // Function to fetch property details by propertyId
const fetchPropertyDetails = async (propertyId) => {
  try {
    const response = await axios.get(`https://bharatroofers.com/api/property/getPropertyById/${propertyId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching property details:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
  return (
    <div className="max-w-full px-4 py-8">
    <div className="bg-white shadow-lg rounded-lg">
      <div className="flex flex-col text-xl font-semibold text-gray-700 mb-4 m-5">
        <h1 className="text-3xl font-bold mb-2">{selectedImage.title}</h1>
        <p className="mr-4">Price: ${selectedImage.price}</p>
        <div className="flex items-center mb-2">
          <FaMapMarkerAlt className="mr-2 " />
          <p>{selectedImage.description}</p>
       
        </div>
      </div>

      {/* Lightbox image */}
      <div className="bg-gray-100">
        <Box />
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
  <DetailItem icon={FaHome} label={`Property Id: ${selectedImage.propertyId}`} color="text-green-500" />
  <DetailItem icon={FaHome} label={`Type: ${selectedImage.type}`} color="text-green-500" />
  <DetailItem icon={FaHome} label={`Commercial Property Type: ${selectedImage.commercialPropertyType || "N/A"}`} color="text-green-500" />
  <DetailItem icon={FaHome} label={`Property For: ${selectedImage.propertyFor}`} color="text-green-500" />
  <DetailItem icon={FaHome} label={`New/Resale: ${selectedImage.newOrResale}`} color="text-green-500" />
  <DetailItem icon={FaHome} label={`TNCP Approved: ${selectedImage.tncpApproved}`} color="text-green-500" />
  <DetailItem icon={FaHome} label={`RERA Number: ${selectedImage.reraNumber}`} color="text-green-500" />
  <DetailItem icon={FaHome} label={`Square Feet: ${selectedImage.squareFeet}`} color="text-green-500" />
  <DetailItem icon={FaHome} label={`Dimension: ${selectedImage.dimension}`} color="text-green-500" />
  <DetailItem icon={FaHome} label={`Car Parking: ${selectedImage.carParking}`} color="text-green-500" />
  <DetailItem icon={FaCalendarAlt} label={`Year Built: ${selectedImage.yearBuilt}`} color="text-green-500" />
  <DetailItem icon={FaMapMarkerAlt} label={`Facing: ${selectedImage.facing}`} color="text-green-500" />
  <DetailItem icon={FaClipboardCheck} label={`Furnishing: ${selectedImage.propertyDetails.furnishing}`} color="text-green-500" />
  <DetailItem icon={FaHome} label={`Property On Floor: ${selectedImage.propertyDetails.propertyOnFloor || "N/A"}`} color="text-green-500" />
  <DetailItem icon={FaHome} label={`Flooring: ${selectedImage.flooring}`} color="text-green-500" />
  <DetailItem icon={FaHome} label={`Age of Property: ${selectedImage.ageOfProperty}`} color="text-green-500" />
  <DetailItem icon={FaHome} label={`Lift: ${selectedImage.lift}`} color="text-green-500" />
</div>

          </div>

          {/* Property About */}
          <div className="bg-white rounded-lg">
  <div className="mt-3 p-1">
    <h2 className="text-xl font-semibold mb-5">About</h2>
    <p className="mb-4 flex items-center gap-2">
      <FaMapMarkerAlt className="text-green-500" />
      {selectedImage.description}
    </p>
    
    <div className="flex flex-col gap-6">
      <DetailItem icon={FaMapMarkerAlt} label={`Location: ${selectedImage.about?.location || 'N/A'}`} color="text-green-500" />
      <DetailItem icon={FaClipboardCheck} label={`Approval: ${selectedImage.about?.approval || 'N/A'}`} color="text-green-500" />
      <DetailItem icon={FaHome} label={`Type: ${selectedImage.about?.type || 'N/A'}`} color="text-green-500" />
      <DetailItem icon={FaCheckCircle} label={`Minimum Price: ${selectedImage.about?.minimumPrice || 'N/A'}`} color="text-green-500" />
    </div>
  </div>
</div>

           {/* Special Highlights */}
           <div className="bg-white p-1 rounded-lg mt-5 mb-6">
            <h2 className="text-xl font-semibold mb-4">Special Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specialHighlights.map((highlight, index) => (
                <DetailItem key={index} icon={highlight.icon} label={highlight.label} color="text-green-500" />
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="mt-5 mb-5">
            <h2 className="text-lg font-bold mb-4">Amenities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {selectedImage.amenities.map((amenity, index) => (
                <DetailItem key={index} icon={amenity.icon} label={amenity.label} color="text-green-500" />
              ))}
            </div>
          </div>
           {/* RECOMMENDED */}
           <div>
  <p className="font-semibold text-xl mb-4">Recommended</p>
  <ul className="list-disc pl-1 space-y-4">
    <li className="flex items-center">
      <FaLongArrowAltRight className="mr-3 text-green-500" />
      Long term investment
    </li>
    <li className="flex items-center">
      <FaHome className="mr-3 text-green-500" />
      Own purpose
    </li>
    <li className="flex items-center">
      <FaDollarSign className="mr-3 text-green-500" />
      Investment
    </li>
  </ul>
</div>

         {/* Related property */}
         <div className="mt-5 mb-5">
              <h2 className="text-lg font-bold mb-4">Related Properties</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedProperties.map((property) => (
                  <Link key={property.id} to={property.link} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                    <p className="text-gray-600">{property.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
       
        {/* Blog Section */}
        <div className="w-1/3">
        {/* Contact us button */}
        <div className="mb-4">
      <HeartbeatButton onClick={scrollToForm}>
        Contact Us
      </HeartbeatButton>
    </div>
          <h2 className="text-lg font-bold mb-4">Related Blog Posts</h2>
          <div className="flex flex-col space-y-4">
            {blogPosts.map((post) => (
              <Link key={post.id} to={post.link} className="flex items-center bg-white rounded-lg shadow-md p-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
       {/* Form */}
       <div className="w-1/3 p-4 bg-gray-100 mx-auto" ref={formRef}>
  <h2 className="text-lg font-bold mb-4">Contact Us</h2>
  <form onSubmit={formSubmit} className="space-y-4">
    {/* Property Id and Name Fields in Same Row */}
    <div className="flex space-x-4 mb-4">
      {/* Property Id Field */}
      <div className="flex-1">
        <label htmlFor="propertyId" className="font-semibold mb-1 block">Property Id:</label>
        <input
          name="propertyId"
          value={selectedImage.propertyId}
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
          value={selectedImage.title}
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
);
};

const DetailItem = ({ icon: Icon, label, color }) => (
<div className="flex items-center">
  <Icon className={`mr-2 ${color}`} />
  <p>{label}</p>
</div>
);

export default PropertyCard;




const heartbeat = keyframes`
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.15);
  }
  50% {
    transform: scale(1);
  }
  70% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled button component
const HeartbeatButton = styled.button`
  background-color: #38a169; /* Tailwind's green-500 */
  color: white;
  padding: 0.5rem 1rem; /* Tailwind's py-2 px-4 */
  border-radius: 0.375rem; /* Tailwind's rounded */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Tailwind's shadow-md */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  width: 12rem; /* Tailwind's w-48 */
  animation: ${heartbeat} 4s infinite; /* Increased duration for slower effect */
  
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Tailwind's shadow-lg */
    transform: scale(1.05);
  }
`;