import React, { useState,useEffect } from 'react';
import {
  FaTimes,
  FaRegBuilding,
  FaHome,
  FaBuilding,
  FaLightbulb,
  FaRoad,
  FaWater,
  FaSun,
} from "react-icons/fa";
import Carausal from './Carausal';
import CarouselSlider from '../Pages/CardSlider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

const titles = [
  "Image 1 Title",
  "Image 2 Title",
  "Image 3 Title",
  "Image 4 Title",
  "Image 5 Title",
  "Image 6 Title",
  "Image 7 Title"
];

const FeatureSection = () => {
  const [properties, setProperties] = useState([]);
  const [propertiesImages, setPropertiesImages] = useState([]);
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleClick = () => setIsVideoOpen(prev => !prev);

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
        setPropertiesImages(response.data.data);
      } catch (error) {
        console.error('Error fetching property images:', error);
      }
    };

    fetchProperties();
    fetchPropertyImages();
  }, []);

  const categories = [
    { name: 'villa', title: 'Villa', defaultImage: 'https://solverwp.com/demo/react/mingrand/assets/img/product/cat-1.png' },
    { name: 'house', title: 'House', defaultImage: 'https://solverwp.com/demo/react/mingrand/assets/img/product/cat-2.png' },
    { name: 'land', title: 'Land', defaultImage: 'https://solverwp.com/demo/react/mingrand/assets/img/product/cat-3.png' },
    { name: 'farmLand', title: 'Farm Land', defaultImage: 'https://solverwp.com/demo/react/mingrand/assets/img/product/cat-4.png' },
    { name: 'commercial', title: 'Commercial', defaultImage: 'default_commercial_image_url' },
  ];

  const getCategoryCount = (category) => {
    return properties.filter(property => property.property_type.toLowerCase() === category.toLowerCase()).length;
  };

  const getCategoryImage = (category, defaultImage) => {
    const property = properties.find(property => property.property_type.toLowerCase() === category.toLowerCase());
    if (!property) return defaultImage;
    const image = propertiesImages.find(image => image.property_id === String(property.id));
    return image ? image.image : defaultImage;
  };

  const navigateToCategory = (category) => {
    const filteredProperties = properties.filter(property => property.property_type.toLowerCase() === category.toLowerCase());
    navigate('/category', { state: { filteredProperties } });
  };

  return (
    <div>
      {/* Image Grid Section */}
      <section className="mt-8 md:mt-12 max-w-screen mx-auto flex items-center justify-center px-4 hover:cursor-pointer md:mb-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl w-full">
        {categories.map((category, index) => (
          <div key={category.name} className={`col-span-2 sm:col-span-1 md:col-span-${index === 3 ? '4' : '2'} relative overflow-hidden h-64`}>
            <img
              src={getCategoryImage(category.name, category.defaultImage)}
              alt={category.title}
              className="transition-transform duration-500 transform hover:scale-110 w-full h-full object-cover cursor-pointer"
              onClick={() => navigateToCategory(category.name)}
            />
            <p className="text-white text-3xl transition delay-100 ease-in-out transform hover:text-green-400 font-bold absolute top-5 left-5">
              {category.title} ({getCategoryCount(category.name)})
            </p>
          </div>
        ))}
      </div>
    </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 md:mb-8">Explore Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaHome className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Buy a Home</h3>
              <p className="text-gray-600">Find your dream home from our extensive collection of listings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaBuilding className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Rent a Home</h3>
              <p className="text-gray-600">Explore rental options that suit your budget and lifestyle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaRegBuilding className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Sell a Home</h3>
              <p className="text-gray-600">Get the best value for your property with our expert assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousal */}
      <section className="max-w-screen">
        <Carausal />
      </section>

      {/* Video section */}
      <section className="bg-black w-full h-[35rem] relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://c4.wallpaperflare.com/wallpaper/846/173/87/5c1cbaf96bcec-wallpaper-preview.jpg" alt="bg_image" className="object-cover w-full h-full filter blur-sm opacity-20" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          {isVideoOpen ? (
            <div className="relative w-screen">
              <button onClick={handleClick} className="absolute top-2 right-2 text-white">
                <FaTimes className="text-2xl hover:text-gray-300" />
              </button>
              <iframe
                width="100%"
                height="525"
                src="https://www.youtube.com/embed/4BzjUq921Y4?si=OayxmXarULwq_ZY3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="flex items-center space-x-8">
              <button onClick={handleClick} className="flex items-center justify-center h-20 w-20 bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75">
                <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA5L3JtNTgxLWVsZW1lbnQtMTA2LnBuZw.png" alt="click button" className="h-12 w-12 object-contain" />
              </button>
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-2">Watch Our Work</h2>
                <p className="text-lg">
                  Discover the amazing projects and creative work we have done. Click the button to watch the video and see for yourself!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Recommended */}
      <span className='font-bold flex items-center justify-center text-3xl text-center mb-6 md:mb-8 mt-6'>Our Property</span>
      <section className='flex justify-around items-center flex-wrap'>
        {['Recommended Property', 'Most View', 'Recent Projects'].map((title, index) => (
          <div key={index}>
            <p className='text-2xl font-bold flex items-center justify-center'>{title}</p>
            <CarouselSlider titles={titles} images={imageArray.map(image => image.link)} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default FeatureSection;
