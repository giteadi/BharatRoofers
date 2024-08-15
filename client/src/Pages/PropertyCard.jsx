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
  FaRoad,
} from "react-icons/fa";
import {
  FaSwimmer,
  FaLightbulb,
  FaFan,
  FaSnowflake,
  FaTv,
  FaWifi,
  FaDesktop,
  FaUtensils,
} from "react-icons/fa";
import { PiArrowFatLineRightFill } from "react-icons/pi";

import PropertyCard2 from "./PropertyCard2";
import { Link, useParams } from "react-router-dom";
import Box from "../Components/LightBox";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { FaCar, FaRuler, FaBuilding } from "react-icons/fa";
import Spinner from '../Pages/Spinner'

const heartbeat = keyframes`
  0% { transform: scale(1); }
  20% { transform: scale(1.2); }
  40% { transform: scale(1); }
  60% { transform: scale(1.2); }
  80% { transform: scale(1); }
  100% { transform: scale(1); }`;

const HeartbeatButton = styled.button`
  animation: ${heartbeat} 5s infinite;
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

    const fetchRelatedProperties = async () => {
      try {
        const response = await axios.get(
          "https://bharatroofers.com/api/property/getSuggestedProperty"
        );
        console.log("Suggested Properties:", response.data.data);
        if (Array.isArray(response.data.data)) {
          setProperties(response.data.data);
        } else {
          setProperties([]);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
        setProperties([]);
      }
    };

    fetchProperties();
    fetchPropertyImages();
    fetchRelatedProperties();
  }, [id]);

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
    return <div><Spinner/></div>;
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
    // Conditionally render null if the label includes certain values
    if (label.includes("N/A") || label.includes("no") || label.includes(": 0")) {
      return null;
    }
  
    return (
      <div className="flex items-center">
        <Icon className={`mr-2 ${color}`} />
        <p className={`text-lg text-gray-600 ${color}`}>
          {label}
        </p>
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
  // console.log("propertyyy",properties);
  const propertiesWithImages = properties.map((property) => {
    const image = propertyImages.find(
      (img) => img.property_id === property.id.toString()
    );
    return {
      ...property,
      imageUrl: image ? image.image : null,
    };
  });

  return (
    <div className="max-w-full px-4 py-8  sm:mt-4 md:mt-10 xl:mt-12 2xl:mt-16">
      <div className="bg-white shadow-lg rounded-lg">
        <div className=" pl-8">
          <p className="text-gray-500 mt-12 md:mb-5 ">
            All you need to know about {title}
          </p>
          <h1 className="text-3xl  text-gray-700 mb-2">{title}</h1>
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
          <div className="bg-gray-100 max-w-[90%] mx-auto">
            <Box images={selectedProperty.images} />
          </div>

          {/* wrapping both */}
          <div className="flex felx-col">
            <div className="flex mt-4">
              {/* Main Content */}
              <div className="w-full pr-4 flex flex-col justify-between">
                {/* Social media */}
                <div className="flex flex-col items-center md:flex-row gap-2 md:gap-5 mb-4">
  <div className="flex gap-5 items-center justify-center">
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
  </div>
  <div className="flex justify-center w-full mt-4 md:mt-0">
    <HeartbeatButton
      className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-transform duration-300 transform hover:scale-105 md:w-auto md:max-w-[20rem]"
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
    {/* Property Id */}
    <DetailItem
      icon={PiArrowFatLineRightFill}
      label={`Property Id: ${selectedProperty.id || "N/A"}`}
      color="text-green-500  capitalize"
    />

    {/* Type */}
    <DetailItem
      icon={PiArrowFatLineRightFill}
      label={`Type: ${selectedProperty.property_type || "N/A"}`}
      color="text-green-500  capitalize"
    />

    {/* Commercial Property Type (conditional) */}
    {selectedProperty.property_type === "commercial" && (
      <DetailItem
        icon={PiArrowFatLineRightFill}
        label={`Commercial Property Type: ${
          selectedProperty.commercial_property_type || "N/A"
        }`}
        color="text-green-500  capitalize"
      />
    )}

    {/* Property For */}
    <DetailItem
      icon={PiArrowFatLineRightFill}
      label={`Property For: ${selectedProperty.property_for || "N/A"}`}
      color="text-green-500  capitalize"
    />

    {/* Number of BHK (conditional) */}
    {!["plot", "land", "farmLand", "commercial"].includes(selectedProperty.property_type) && (
      <DetailItem
        icon={PiArrowFatLineRightFill}
        label={`Number of BHK: ${selectedProperty.bhk || "N/A"}`}
        color="text-green-500  capitalize"
      />
    )}

    {/* New/Resale (conditional) */}
    {selectedProperty.property_for === "sale" && (
      <DetailItem
        icon={PiArrowFatLineRightFill}
        label={`New/Resale: ${selectedProperty.new_resale || "N/A"}`}
        color="text-green-500  capitalize"
      />
    )}

    {/* TNCP Approved (conditional) */}
    {selectedProperty.property_for === "sale" && (
      <DetailItem
        icon={PiArrowFatLineRightFill}
        label={`TNCP Approved: ${selectedProperty.tncp || "N/A"}`}
        color="text-green-500  capitalize"
      />
    )}

    {/* RERA Number (conditional) */}
    {selectedProperty.property_for === "sale" && (
      <DetailItem
        icon={PiArrowFatLineRightFill}
        label={`RERA Number: ${selectedProperty.rera || "N/A"}`}
        color="text-green-500  capitalize"
      />
    )}

    {/* Structure (conditional) */}
    {!["plot", "land", "farmLand", "commercial"].includes(selectedProperty.property_type) && (
      <DetailItem
        icon={PiArrowFatLineRightFill}
        label={`Structure: ${selectedProperty.structure || "N/A"}`}
        color="text-green-500  capitalize"
      />
    )}

    {/* Square Feet */}
    <DetailItem
      icon={PiArrowFatLineRightFill}
      label={`Square Feet: ${selectedProperty.square_ft || "N/A"}`}
      color="text-green-500  capitalize"
    />

    {/* Dimension */}
    <DetailItem
      icon={PiArrowFatLineRightFill}
      label={`Dimension: ${selectedProperty.dimension || "N/A"}`}
      color="text-green-500  capitalize"
    />

    {/* Car Parking (conditional) */}
    {!(
      ["plot", "land", "farmLand", "commercial"].includes(selectedProperty.property_type) ||
      ["commercial plot", "commercial land"].includes(selectedProperty.commercial_property_type)
    ) && (
      <DetailItem
        icon={PiArrowFatLineRightFill}
        label={`Car Parking: ${selectedProperty.car_parking || "N/A"}`}
        color="text-green-500  capitalize"
      />
    )}

    {/* Modular Kitchen (conditional) */}
    {!["plot", "land", "farmLand", "commercial"].includes(selectedProperty.property_type) && (
      <DetailItem
        icon={PiArrowFatLineRightFill}
        label={`Modular Kitchen: ${selectedProperty.modularKitchen || "N/A"}`}
        color="text-green-500  capitalize"
      />
    )}

    {/* Year Built */}
    <DetailItem
      icon={PiArrowFatLineRightFill}
      label={`Year Built: ${selectedProperty.year_built || "N/A"}`}
      color="text-green-500  capitalize"
    />

    {/* Facing */}
    <DetailItem
      icon={PiArrowFatLineRightFill}
      label={`Facing: ${selectedProperty.facing || "N/A"}`}
      color="text-green-500  capitalize"
    />

    {/* Furnishing (conditional) */}
    {!(
      ["plot", "land", "farmLand", "commercial"].includes(selectedProperty.property_type) ||
      ["commercial plot", "commercial land"].includes(selectedProperty.commercial_property_type)
    ) && (
      <DetailItem
        icon={PiArrowFatLineRightFill}
        label={`Furnishing: ${selectedProperty.furnishing || "N/A"}`}
        color="text-green-500  capitalize"
      />
    )}

    {/* Carpet Area (conditional) */}
    {!["plot", "land", "farmLand", "commercial"].includes(selectedProperty.property_type) && (
      <DetailItem
        icon={PiArrowFatLineRightFill}
        label={`Carpet Area: ${selectedProperty.carpet_area || "N/A"}`}
        color="text-green-500  capitalize"
      />
    )}

    {/* Bathroom (conditional) */}
    {!["plot", "land", "farmLand", "commercial"].includes(selectedProperty.property_type) && (
      <DetailItem
        icon={PiArrowFatLineRightFill}
        label={`Bathroom: ${selectedProperty.bathroom || "N/A"}`}
        color="text-green-500  capitalize"
      />
    )}

    {/* Property On Floor (conditional) */}
    {!(
      ["plot", "land", "farmLand", "commercial"].includes(selectedProperty.property_type) ||
      ["commercial plot", "commercial land"].includes(selectedProperty.commercial_property_type)
    ) && (
      <DetailItem
        icon={PiArrowFatLineRightFill}
        label={`Property On Floor: ${selectedProperty.property_on_floor || "N/A"}`}
        color="text-green-500  capitalize"
      />
    )}

    {/* Flooring (conditional) */}
    {!(
      ["plot", "land", "farmLand", "commercial"].includes(selectedProperty.property_type) ||
      ["commercial plot", "commercial land"].includes(selectedProperty.commercial_property_type)
    ) && (
      <DetailItem
        icon={PiArrowFatLineRightFill}
        label={`Flooring: ${selectedProperty.flooring || "N/A"}`}
        color="text-green-500  capitalize"
      />
    )}

    {/* Age of Property */}
    <DetailItem
      icon={PiArrowFatLineRightFill}
      label={`Age of Property: ${
        selectedProperty.age_of_property
          ? `${selectedProperty.age_of_property} years`
          : "N/A"
      }`}
      color="text-green-500  capitalize"
    />

    {/* Parking (conditional) */}
    {!["plot", "land", "farmLand", "commercial"].includes(selectedProperty.property_type) && (
      <DetailItem
        icon={PiArrowFatLineRightFill}
        label={`Parking: ${selectedProperty.parking || "N/A"}`}
        color="text-green-500  capitalize"
      />
    )}

    {/* Lift (conditional) */}
    {!(
      ["plot", "land", "farmLand", "commercial"].includes(selectedProperty.property_type) ||
      ["commercial plot", "commercial land"].includes(selectedProperty.commercial_property_type)
    ) && (
      <DetailItem
        icon={PiArrowFatLineRightFill}
        label={`Lift: ${selectedProperty.lift || "N/A"}`}
        color="text-green-500  capitalize"
      />
    )}
  </div>
</div>


                {/* Description */}
                <div className="mt-5 p-2 w-full lg:w-1/2 flex flex-col">
                  <p className="text-2xl font-semibold text-2xl">Description</p>
                  <p className="text-gray-700">
                    {selectedProperty.property_description}
                  </p>
                </div>

                {/* Amenities */}

                <div className="mt-5 p-2">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Amenities
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {selectedProperty?.road == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Road"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.security_24_7 == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="24/7 Security"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.car_parking == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Car Parking"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.drainage == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Drainage"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.entry_gate == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Entry Gate"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.good_natural_light == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Good Natural Light"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.gated_community == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Gated Community"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.immediate_possession == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Immediate Possession"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.investment == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Investment"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.own_purpose == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Own Purpose"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.near_green_zone == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Near Green Zone"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.near_temple == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Near Temple"
                        color="text-green-500"
                      />
                    )}
                    {/* Additional Amenities from the old list */}
                    {selectedProperty?.swimming_pool == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Swimming Pool"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.fall_ceiling == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Fall Ceiling"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.wallpaper == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Wallpaper"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.lights == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Lights"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.fans == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Fans"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.terrace == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Terrace"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.air_conditioning == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Air Conditioning"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.cable_tv == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Cable TV"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.balcony == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Balcony"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.internet == 1 && (
                      <DetailItem
                        icon={FaHome}
                        label="Internet"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.computer == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Computer"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.dishwasher == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Dishwasher"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.activity_area == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Activity Area"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.roadLight == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Road Light"
                        color="text-green-500"
                      />
                    )}
                  </div>
                </div>

                {/* About */}
                {/* <div className="mt-5 p-2">
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
                </div> */}
                {/* Special heigh light */}
                <div className="col-12 special-highlights p-4 rounded-lg">
                  <h5 className="text-lg font-semibold mb-3 text-gray-700">
                    SPECIAL HIGHLIGHTS :
                  </h5>
                  <ul className="list-none p-0 space-y-2">
                    {selectedProperty?.common_visitor_parking == 1 && (
                      <li className="flex items-center">
                        <PiArrowFatLineRightFill className="text-green-500 mr-2" />
                        <p className="text-gray-700 uppercase">
                          Good No. of Common/Visitor Parking
                        </p>
                      </li>
                    )}
                    {selectedProperty?.main_road_facing == 1 && (
                      <li className="flex items-center">
                        <PiArrowFatLineRightFill className="text-green-500 mr-2" />
                        <p className="text-gray-700 uppercase">Main Road Facing</p>
                      </li>
                    )}
                    {selectedProperty?.good_ceiling_height == 1 && (
                      <li className="flex items-center">
                        <PiArrowFatLineRightFill className="text-green-500 mr-2" />
                        <p className="text-gray-700 uppercase">
                          Good Ceiling Height
                        </p>
                      </li>
                    )}
                    {selectedProperty?.good_natural_light == 1 && (
                      <li className="flex items-center">
                        <PiArrowFatLineRightFill className="text-green-500 mr-2" />
                        <p className="text-gray-700 uppercase">
                          Good Natural Light in the Unit
                        </p>
                      </li>
                    )}
                    {selectedProperty?.attractive_entrance_gate == 1 && (
                      <li className="flex items-center">
                        <PiArrowFatLineRightFill className="text-green-500 mr-2" />
                        <p className="text-gray-700 uppercase">
                          Attractive Entrance Gate
                        </p>
                      </li>
                    )}
                    {selectedProperty?.gated_community == 1 && (
                      <li className="flex items-center">
                        <PiArrowFatLineRightFill className="text-green-500 mr-2" />
                        <p className="text-gray-700 uppercase">Gated Community</p>
                      </li>
                    )}
                    {selectedProperty?.property_for == "sale" &&
                      selectedProperty?.immediate_possession == 1 && (
                        <li className="flex items-center">
                          <PiArrowFatLineRightFill className="text-green-500 mr-2" />
                          <p className="text-gray-700 uppercase">
                            Immediate Possession
                          </p>
                        </li>
                      )}
                    {selectedProperty?.landscape_garden == 1 && (
                      <li className="flex items-center">
                        <PiArrowFatLineRightFill className="text-green-500 mr-2" />
                        <p className="text-gray-700 uppercase">Landscape Garden</p>
                      </li>
                    )}
                    {selectedProperty?.water_supply_24_7 == 1 && (
                      <li className="flex items-center">
                        <PiArrowFatLineRightFill className="text-green-500 mr-2" />
                        <p className="text-gray-700 uppercase">
                          24/7 Water Supply
                        </p>
                      </li>
                    )}
                    {selectedProperty?.bore_well_water_24_7 == 1 && (
                      <li className="flex items-center">
                        <PiArrowFatLineRightFill className="text-green-500 mr-2" />
                        <p className="text-gray-700 uppercase">
                          24/7 Bore Well Water
                        </p>
                      </li>
                    )}
                    {selectedProperty?.environment_clearance_available == 1 && (
                      <li className="flex items-center">
                        <PiArrowFatLineRightFill className="text-green-500 mr-2" />
                        <p className="text-gray-700 uppercase">
                          Environment Clearance Available
                        </p>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Recommended Section */}
                <div className="mt-5 p-2">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Recommended
                  </h2>
                  <ul className="list-disc  text-gray-600">
                    {selectedProperty?.long_term_investment == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Long Term Investment"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.own_purpose == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Own Purpose"
                        color="text-green-500"
                      />
                    )}
                    {selectedProperty?.investment == 1 && (
                      <DetailItem
                        icon={PiArrowFatLineRightFill}
                        label="Investment"
                        color="text-green-500"
                      />
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Related Property */}
      <div className="properties-list">
        <span className="flex items-center justify-center">
          <p className="font-bold text-3xl p-4">Related Property</p>
        </span>
        <PropertyCard2 properties={propertiesWithImages} />
      </div>
      {/* wrap contactus and blogs  */}
      <div className="flex flex-col items-center justify-center md:flex-row">
        {/* Blogs */}
        <div className="mt-8 md:mt-[7rem] w-full sm:max-w-md md:max-w-lg px-4 md:px-0">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
            Interesting Blogs
          </h2>
          <div className="flex flex-col space-y-8">
            {[
              {
                src: "https://media.istockphoto.com/id/178988183/photo/house-in-bad-summer-thunderstorm.webp?b=1&s=170667a&w=0&k=20&c=GCKr4PR2gErNiBLYPnH75IbcHEl1PcCVbmoqRUfCAKs=",
                alt: "Blog 1",
                title:
                  "The Critical Role of Home Inspections: A Buyer's Guide to Informed Decisions",
              },
              {
                src: "https://media.istockphoto.com/id/453944565/photo/home-exterior.webp?b=1&s=170667a&w=0&k=20&c=ONvmTRg63RYsyMJTnySOLpOBZlaoUeh6a9jfYuVQ_iw=",
                alt: "Blog 2",
                title:
                  "New Construction vs. Resale Homes: Making the Right Choice for Your Next Property",
              },
              {
                src: "https://bharatroofers.com/static/media/blog3.a868ed5bc837e5adec6a.avif",
                alt: "Blog 3",
                title: "Looking for 1 BHK Apartment Duplex",
              },
              {
                src: "https://bharatroofers.com/static/media/blog4.c13b6b74e4ac48492bfa.avif",
                alt: "Blog 4",
                title:
                  "Budget Allocations and Real Estate: Paving the Path Ahead",
              },
              {
                src: "https://bharatroofers.com/static/media/blog8.893a9c1a3a5bba7ae622.avif",
                alt: "Blog 5",
                title:
                  "Understanding Real Estate Dynamics: Future Perspectives",
              },
            ].map((blog, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 md:gap-6"
              >
                <div className="w-full md:w-1/3">
                  <img
                    src={blog.src}
                    alt={blog.alt}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3 mt-4 md:mt-0">
                  <div className="flex items-center gap-3 mb-2">
                    <FaHome />
                    <p className="text-sm md:text-base">Selling a home</p>
                  </div>
                  <Link
                    to="/blogs"
                    className="text-lg md:text-xl font-medium text-gray-800 leading-snug"
                  >
                    {blog.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Form */}
        <div
          className="my-10 p-4 bg-gray-50 rounded-lg w-full max-w-2xl mx-auto"
          ref={formRef}
        >
          <h2 className="text-2xl  text-gray-700 mb-4 text-center">
            Contact Us
          </h2>
          <form onSubmit={formSubmit} className="space-y-4">
            {/* Property Id and Name Fields in Same Row */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4 space-y-4 sm:space-y-0">
              {/* Property Id Field */}
              <div className="flex-1">
                <label
                  htmlFor="propertyId"
                  className="font-semibold mb-1 block"
                >
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
    </div>
  );
};

export default PropertyCard;
