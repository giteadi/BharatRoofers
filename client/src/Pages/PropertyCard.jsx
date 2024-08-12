import React, { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import {
  FaMapMarkerAlt,
  FaHome,
  FaTelegram,
  FaWhatsapp,
  FaFacebookMessenger,
  FaTwitter,
  FaInstagram,
  FaRupeeSign,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Box from "../Components/LightBox";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { FaCar, FaRuler, FaBuilding } from "react-icons/fa";

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
  width: 100%;
  max-width: 20rem; /* Adjust as needed */

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
  const [formData, setFormData] = useState({
    propertyId: id || "",
    propertyName: "",
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "https://bharatroofers.com/api/property/getAllProperty"
        );
        setProperties(response.data.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    const fetchPropertyImages = async () => {
      try {
        const response = await axios.get(
          "https://bharatroofers.com/api/property/getAllPropertyImages"
        );
        const { data } = response.data;

        setPropertyImages(data);
      } catch (error) {
        console.error("Error fetching property images:", error);
      }
    };

    fetchProperties();
    fetchPropertyImages();
  }, []);

  useEffect(() => {
    if (properties.length > 0 && propertyImages.length > 0) {
      const property = properties.find((p) => p.id === parseInt(id));
      if (property) {
        const images = propertyImages
          .filter((img) => img.property_id === property.id.toString())
          .map((img) => img.image); // Extract only the image URLs
        console.log(property, images);

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
    about = {},
  } = selectedProperty;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://bharatroofers.com/api/property/interestedUser",
        formData
      );
      if (res.data.success) {
        toast.success(res.data.message);
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  function scrollToForm() {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  const DetailItem = ({ icon: Icon, label, color }) => {
    // console.log("label",label);

    if (label.includes("N/A")) {
      return null;
    }
    if (label.includes("no")) {
      return null;
    }

    if (label.includes(": 0")) {
      return null;
    }

    // if(label==="0"){
    //   return null;
    // }
    return (
      <div className="flex items-center">
        <Icon className={`mr-2 ${color}`} />
        <p className="text-lg text-gray-600">{label}</p>
      </div>
    );
  };
  console.log("Selected property:", selectedProperty);
  // console.log("feet",selectedProperty.square_ft);
  const handleShareClick = (platform) => {
    let shareUrl = "";
    const currentUrl = window.location.href; // Get the current page URL

    switch (platform) {
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`;
        break;
      case "messenger":
        shareUrl = `fb-messenger://share?link=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      case "instagram":
        // Instagram does not have a direct sharing URL, so you might redirect users to Instagram with a message
        shareUrl = "https://www.instagram.com";
        alert(
          "Instagram does not support direct URL sharing, but you can share it manually."
        );
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
  };
  return (
    <div className="max-w-full px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-700 mb-2">{title}</h1>
          <p className="text-xl text-gray-500 mb-2 flex items-center">
            Price:
            <FaRupeeSign /> {price}
          </p>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="mr-2 text-gray-600" />
            <p className="text-lg text-gray-600">
              {selectedProperty.property_address}
            </p>
          </div>

          {/* Lightbox image */}
          <div className="bg-gray-100">
            <Box images={selectedProperty.images} />
          </div>

          {/* wrapping both */}
          <div className="flex felx-col">
            <div className="flex mt-4">
              {/* Main Content */}
              <div className="w-full pr-4 flex flex-col justify-between">
                {/* Social media */}
                <div className="flex gap-5 items-center mb-4">
                  <p className="font-semibold text-2xl text-gray-700">Share:</p>
                  <FaTelegram
                    className="cursor-pointer hover:animate-bounce text-blue-500"
                    size={32}
                    onClick={() => handleShareClick("telegram")}
                  />
                  <FaWhatsapp
                    className="cursor-pointer hover:animate-bounce text-green-500"
                    size={32}
                    onClick={() => handleShareClick("whatsapp")}
                  />
                  <FaFacebookMessenger
                    className="cursor-pointer hover:animate-bounce text-blue-600"
                    size={32}
                    onClick={() => handleShareClick("messenger")}
                  />
                  <FaTwitter
                    className="cursor-pointer hover:animate-bounce text-blue-400"
                    size={32}
                    onClick={() => handleShareClick("twitter")}
                  />
                  <FaInstagram
                    className="cursor-pointer hover:animate-bounce text-pink-500"
                    size={32}
                    onClick={() => handleShareClick("instagram")}
                  />
                  <div className="ml-auto">
                    <HeartbeatButton
                      className="heartbeat md:w-[20rem] absolute md:right-[5rem] "
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
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Property Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {/* Property detail items */}
                    <DetailItem
                      icon={FaHome}
                      label={`Property Id: ${selectedProperty.id || "N/A"}`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Type: ${selectedProperty.property_type || "N/A"}`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaBuilding}
                      label={`Commercial Property Type: ${
                        selectedProperty.commercial_property_type || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Property For: ${
                        selectedProperty.property_for || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`New/Resale: ${
                        selectedProperty.new_resale || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`TNCP Approved: ${selectedProperty.tncp || "N/A"}`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`RERA Number: ${selectedProperty.rera || "N/A"}`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Square Feet: ${
                        selectedProperty.square_ft || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaRuler}
                      label={`Dimension: ${
                        selectedProperty.dimension || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaCar}
                      label={`Car Parking: ${
                        selectedProperty.car_parking || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Year Built: ${
                        selectedProperty.year_built || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Facing: ${selectedProperty.facing || "N/A"}`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Flooring: ${selectedProperty.flooring || "N/A"}`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Age of Property: ${
                        selectedProperty.age_of_property || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Lift: ${selectedProperty.lift || "N/A"}`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Price: ₹${selectedProperty.price || "N/A"}`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`City: ${selectedProperty.property_city || "N/A"}`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Address: ${
                        selectedProperty.property_address || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Number of Visits: ${
                        selectedProperty.visits || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Balcony: ${selectedProperty.balcony || "N/A"}`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Bathrooms: ${selectedProperty.bathroom || "N/A"}`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`BHK: ${selectedProperty.bhk || "NA"}`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Modular Kitchen: ${
                        selectedProperty.modularKitchen || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Furnishing: ${
                        selectedProperty.furnishing || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Swimming Pool: ${
                        selectedProperty.swimming_pool || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Terrace: ${selectedProperty.terrace || "N/A"}`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Immediate Possession: ${
                        selectedProperty.immediate_possession || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Investment: ${
                        selectedProperty.investment || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Own Purpose: ${
                        selectedProperty.own_purpose || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Age: ${
                        selectedProperty.age_of_property || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Structure: ${
                        selectedProperty.structure || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Facing: ${selectedProperty.facing || "N/A"}`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Gated Community: ${
                        selectedProperty.gated_community || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Attractive Entrance Gate: ${
                        selectedProperty.attractive_entrance_gate || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Near Green Zone: ${
                        selectedProperty.near_green_zone || "N/A"
                      }`}
                      color="text-green-500"
                    />
                    <DetailItem
                      icon={FaHome}
                      label={`Near Temple: ${
                        selectedProperty.near_temple || "N/A"
                      }`}
                      color="text-green-500"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="mt-5 p-2 w-full lg:w-1/2">
                  <p className="text-2xl font-semibold">Description</p>
                  <p className="text-gray-700">
                    {selectedProperty.property_description}
                  </p>
                </div>

                {/* Amenities */}
                <div className="mt-5 p-2">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Amenities
                  </h2>
                  <ul className="list-disc pl-6 text-gray-600">
                    {selectedProperty?.road == 1 && (
                      <DetailItem
                        icon={FaHome}
                        label="Road"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.security_24_7 == 1 && (
                      <DetailItem
                        icon={FaHome}
                        label="24/7 Security"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.car_parking == 1 && (
                      <DetailItem
                        icon={FaCar}
                        label="Car Parking"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.drainage == 1 && (
                      <DetailItem
                        icon={FaHome}
                        label="Drainage"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.entry_gate == 1 && (
                      <DetailItem
                        icon={FaHome}
                        label="Entry Gate"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.good_natural_light == 1 && (
                      <DetailItem
                        icon={FaHome}
                        label="Good Natural Light"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.gated_community == 1 && (
                      <DetailItem
                        icon={FaHome}
                        label="Gated Community"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.immediate_possession == 1 && (
                      <DetailItem
                        icon={FaHome}
                        label="Immediate Possession"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.investment == 1 && (
                      <DetailItem
                        icon={FaHome}
                        label="Investment"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.own_purpose == 1 && (
                      <DetailItem
                        icon={FaHome}
                        label="Own Purpose"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.near_green_zone == 1 && (
                      <DetailItem
                        icon={FaHome}
                        label="Near Green Zone"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.near_temple == 1 && (
                      <DetailItem
                        icon={FaHome}
                        label="Near Temple"
                        color="text-green-500"
                      />
                    )}
                  </ul>
                </div>

                {/* About */}
                <div className="mt-5 p-2">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    About
                  </h2>
                  <p className="text-gray-600">
                    {" "}
                    City: {selectedProperty.property_city}
                  </p>
                  <p className="text-gray-600">
                    Address:{selectedProperty.property_address}
                  </p>
                  <p className="text-gray-600">
                    Year Build:{selectedProperty.year_built}
                  </p>
                </div>
              </div>
            </div>

            {/* Blogs*/}
            <div className="md:mt-[7rem] w-full sm:max-w-md md:max-w-lg px-4 md:px-0">
  <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
    Interesting Blogs
  </h2>
  <div className="flex flex-col space-y-6">
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3">
        <img
          src="https://media.istockphoto.com/id/178988183/photo/house-in-bad-summer-thunderstorm.webp?b=1&s=170667a&w=0&k=20&c=GCKr4PR2gErNiBLYPnH75IbcHEl1PcCVbmoqRUfCAKs="
          alt="Blog 1"
          className="rounded-lg w-full"
        />
      </div>
      <div className="w-full md:w-2/3 mt-4 md:mt-0 pl-0 md:pl-4">
        <div className="flex items-center gap-3">
          <FaHome />
          <p>Selling a home</p>
        </div>
        <Link
          to="/blogs"
          className="text-lg font-medium text-gray-800"
        >
          The Critical Role of Home Inspections: A Buyer's Guide to Informed Decisions
        </Link>
      </div>
    </div>

    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3">
        <img
          src="https://media.istockphoto.com/id/453944565/photo/home-exterior.webp?b=1&s=170667a&w=0&k=20&c=ONvmTRg63RYsyMJTnySOLpOBZlaoUeh6a9jfYuVQ_iw="
          alt="Blog 2"
          className="rounded-lg w-full"
        />
      </div>
      <div className="w-full md:w-2/3 mt-4 md:mt-0 pl-0 md:pl-4">
        <div className="flex items-center gap-3">
          <FaHome />
          <p>Selling a home</p>
        </div>
        <Link
          to="/blogs"
          className="text-lg font-medium text-gray-800"
        >
          New Construction vs. Resale Homes: Making the Right Choice for Your Next Property
        </Link>
      </div>
    </div>

    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3">
        <img
          src="https://bharatroofers.com/static/media/blog3.a868ed5bc837e5adec6a.avif"
          alt="Blog 3"
          className="rounded-lg w-full"
        />
      </div>
      <div className="w-full md:w-2/3 mt-4 md:mt-0 pl-0 md:pl-4">
        <div className="flex items-center gap-3">
          <FaHome />
          <p>Selling a home</p>
        </div>
        <Link
          to="/blogs"
          className="text-lg font-medium text-gray-800"
        >
          Looking for 1 BHK Apartment Duplex
        </Link>
      </div>
    </div>

    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3">
        <img
          src="https://bharatroofers.com/static/media/blog4.c13b6b74e4ac48492bfa.avif"
          alt="Blog 4"
          className="rounded-lg w-full"
        />
      </div>
      <div className="w-full md:w-2/3 mt-4 md:mt-0 pl-0 md:pl-4">
        <div className="flex items-center gap-3">
          <FaHome />
          <p>Selling a home</p>
        </div>
        <Link
          to="/blogs"
          className="text-lg font-medium text-gray-800"
        >
          Budget Allocations and Real Estate: Paving the Path Ahead
        </Link>
      </div>
    </div>

    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3">
        <img
          src="https://bharatroofers.com/static/media/blog8.893a9c1a3a5bba7ae622.avif"
          alt="Blog 5"
          className="rounded-lg w-full"
        />
      </div>
      <div className="w-full md:w-2/3 mt-4 md:mt-0 pl-0 md:pl-4">
        <div className="flex items-center gap-3">
          <FaHome />
          <p>Selling a home</p>
        </div>
        <Link
          to="/blogs"
          className="text-lg font-medium text-gray-800"
        >
          Budget Allocations and Real Estate: Paving the Path Ahead
        </Link>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div
        className="my-10 p-4 bg-gray-50 rounded-lg w-full max-w-2xl mx-auto"
        ref={formRef}
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
          Contact Us
        </h2>
        <form onSubmit={formSubmit} className="space-y-4">
          {/* Property Id and Name Fields in Same Row */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4 space-y-4 sm:space-y-0">
            {/* Property Id Field */}
            <div className="flex-1">
              <label htmlFor="propertyId" className="font-semibold mb-1 block">
                Property Id:
              </label>
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
              <label
                htmlFor="propertyName"
                className="font-semibold mb-1 block"
              >
                Property Name:
              </label>
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
            <label htmlFor="name" className="font-semibold mb-1">
              Your Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="font-semibold mb-1">
              Your Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="font-semibold mb-1">
              Your Message:
            </label>
            <textarea
              name="message"
              placeholder="Your Message"
              id="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyCard;
