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
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import Box from "../Components/LightBox";

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
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col text-xl font-semibold text-gray-700 mb-4 m-5">
          <h1 className="text-3xl font-bold mb-2">{selectedImage.title}</h1>
          <p className="mr-4">Price: ${selectedImage.price}</p>
          <p>{selectedImage.description}</p>
        </div>
        <div className="bg-gray-100">
          {/* <img
            src={selectedImage.link}
            alt={selectedImage.title}
            className="flex mx-auto w-1/2 object-fit"
          /> */}
          <Box />
        </div>
        <div className="p-6">
          <div className="">
            <div className="w-full">
              <h2 className="text-lg font-bold mb-4">Property Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <DetailItem
                  icon={FaHome}
                  label={`Property Id: ${selectedImage.propertyId}`}
                />
                <DetailItem
                  icon={FaHome}
                  label={`Type: ${selectedImage.type}`}
                />
                <DetailItem
                  icon={FaHome}
                  label={`Commercial Property Type: ${selectedImage.commercialPropertyType || "N/A"}`}
                />
                <DetailItem
                  icon={FaHome}
                  label={`Property For: ${selectedImage.propertyFor}`}
                />
                <DetailItem
                  icon={FaHome}
                  label={`New/Resale: ${selectedImage.newOrResale}`}
                />
                <DetailItem
                  icon={FaHome}
                  label={`TNCP Approved: ${selectedImage.tncpApproved}`}
                />
                <DetailItem
                  icon={FaHome}
                  label={`RERA Number: ${selectedImage.reraNumber}`}
                />
                <DetailItem
                  icon={FaHome}
                  label={`Square Feet: ${selectedImage.squareFeet}`}
                />
                <DetailItem
                  icon={FaHome}
                  label={`Dimension: ${selectedImage.dimension}`}
                />
                <DetailItem
                  icon={FaHome}
                  label={`Car Parking: ${selectedImage.carParking}`}
                />
                <DetailItem
                  icon={FaCalendarAlt}
                  label={`Year Built: ${selectedImage.yearBuilt}`}
                />
                <DetailItem
                  icon={FaMapMarkerAlt}
                  label={`Facing: ${selectedImage.facing}`}
                />
                <DetailItem
                  icon={FaClipboardCheck}
                  label={`Furnishing: ${selectedImage.propertyDetails.furnishing}`}
                />
                <DetailItem
                  icon={FaHome}
                  label={`Property On Floor: ${selectedImage.propertyDetails.propertyOnFloor || "N/A"}`}
                />
                <DetailItem
                  icon={FaHome}
                  label={`Flooring: ${selectedImage.flooring}`}
                />
                <DetailItem
                  icon={FaHome}
                  label={`Age of Property: ${selectedImage.ageOfProperty}`}
                />
                <DetailItem
                  icon={FaHome}
                  label={`Lift: ${selectedImage.lift}`}
                />
              </div>
            </div>

            <div className="w-full mt-5 mb-10">
              <h2 className="text-lg font-bold mb-4">Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {selectedImage.amenities ? (
                  selectedImage.amenities.map((amenity, index) => (
                    <DetailItem key={index} icon={amenity.icon} label={amenity.label} />
                  ))
                ) : (
                  <p>No amenities available.</p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md w-1/2 shadow-md">
            <h2 className="text-lg font-bold mb-4">Send Enquiry to Owner</h2>
            <form onSubmit={formSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border rounded"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ icon: Icon, label }) => (
  <div className="flex items-center">
    <Icon className="mr-2 text-green-500" />
    <span>{label}</span>
  </div>
);

export default PropertyCard;