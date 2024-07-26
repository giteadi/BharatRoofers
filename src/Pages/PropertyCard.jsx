import React from "react";
import toast from "react-hot-toast";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaHome,
  FaCalendarAlt,
  FaClipboardCheck,
  FaKey,
  FaCouch,
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
const PropertyCard = () => {
  const { id } = useParams();

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

  return (
    <div className="max-w-full px-4 py-8">
    <div className="bg-white shadow-lg rounded-lg">
      <div className="flex flex-col text-xl font-semibold text-gray-700 mb-4 m-5">
        <h1 className="text-3xl font-bold mb-2">{selectedImage.title}</h1>
        <p className="mr-4">Price: ${selectedImage.price}</p>
        <div className="flex items-center mb-2">
          <FaMapMarkerAlt className="mr-2 text-green-500" />
          <p>{selectedImage.description}</p>
          <p className="text-green-500">{selectedImage.propertyDetails.address}</p>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
          <div className="bg-white rounded-lg ">
            <div className="mt-3 p-1 ">
              <h2 className="text-xl font-semibold mb-5">About</h2>
              <p className=" mb-4 flex items-center gap-1">
                <FaMapMarkerAlt className="text-green-500" />
                {selectedImage.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <div className="mt-5 mb-10">
            <h2 className="text-lg font-bold mb-4">Amenities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {selectedImage.amenities.map((amenity, index) => (
                <DetailItem key={index} icon={amenity.icon} label={amenity.label} color="text-green-500" />
              ))}
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="w-1/3">
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
