
import React from "react";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";

const PropertyCard = () => {
  const { id } = useParams();

  const imageArray = [
    {
      id: 1,
      link: "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-1.png",
      title: "Silver Park",
      description: "3 BHK House in Vijay Nagar, Jabalpur",
      price: "Price on Request",
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
      }
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
      }
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
      }
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
      }
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
      }
    }
  ];
  

  const imageId = parseInt(id);

  // Find the selected image based on id
  const selectedImage = imageArray.find(image => image.id === imageId);

  if (!selectedImage) {
    return <div>Image not found.</div>; // Handle case when image id doesn't match any in array
  }
  function formSubmit(e) {
    e.preventDefault(); 
    
      toast.success("Form submitted successfully")

  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
          <div className="bg-gray-100 rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Applied Filters</h2>
            <div className="mb-4">
              <p>Independent House/Villa</p>
              <button className="text-blue-600">Clear All</button>
            </div>
            <h2 className="text-lg font-bold mb-4">Budget</h2>
            <input type="range" min="0" max="100" className="w-full" />
            <div className="flex justify-between">
              <span>0</span>
              <span>100 Crore</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/4 px-4">
          <div className="flex flex-col md:flex-row md:gap-12 bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-col justify-between">
              <div className="mt-4 md:mt-0 md:pl-7">
                <h2 className="text-xl font-bold">{selectedImage.title}</h2>
                <p>{selectedImage.description}</p>
                <p>{selectedImage.price}</p>
                <p className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" /> {selectedImage.status}
                </p>
              </div>
            </div>
            <img
              src={selectedImage.link}
              alt={selectedImage.title}
              className="mt-4 md:mt-0 md:max-w-lg object-cover rounded"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Property Details</h2>
            <p>Area: 1000 sq.ft</p>
            <p>Configuration: 2 Bedrooms, 2 Bathrooms, 1 Balcony</p>
            <p>Price: 13 Lac</p>
            <p>Address: Surtalai, Jabalpur</p>
            <p>Floors: 2 Floors</p>
            <p>Possession: Within 6 months</p>
            <p>Status: Not Available</p>
            <p>Property Ownership: Power of Attorney</p>
            <p>Furnishing: Unfurnished</p>
            <p>Parking: 1 Covered</p>
          </div>
          {/* Owner details */}
          <div className="mt-8 bg-gray-100 rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Explore Jabalpur</h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold">Popular Localities</h3>
              <p>Most searched by buyers in Jabalpur</p>
            </div>
          </div>
        </div>
        <div>
        <div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-4">Owner Details</h2>
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Owner"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">{selectedImage.ownerDetails.name}</h3>
                <p>Properties Listed: {selectedImage.ownerDetails.propertiesListed}</p>
                <p>Localities: {selectedImage.ownerDetails.localities.join(", ")}</p>
              </div>
            </div>
            {/* <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              View Phone Number
            </button> */}
          </div>
          </div>
          {/* Form */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-4">
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
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="agree"
                  className="mr-2"
                />
                <label className="text-sm" htmlFor="agree">
                  I agree to the Terms & Conditions and Privacy Policy
                </label>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
