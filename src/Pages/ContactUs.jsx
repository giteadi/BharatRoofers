import React, { useState } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ firstName, lastName, email, phoneNumber, message });

    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <div className="relative flex justify-center items-center bg-black text-white max-w-screen">
      <div className="absolute inset-0 bg-cover bg-center backdrop-filter backdrop-blur-sm" style={{ backgroundImage: 'url("https://thumbs.wbm.im/pw/small/e79ed78f33ea2825b7bb5598d66fe60c.jpg")', opacity: 0.3 , objectFit:"cover" }}></div>
      <div className="mx-auto text-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-screen flex flex-col lg:flex-row gap-8 justify-center items-ceter">

        <div className="w-full lg:w-1/2 max-w-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold mt-9">Contact Us</h2>
          <p className="mb-8 text-white">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-white">First Name</label>
              <input
                type="text"
                id="firstName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-white">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-white">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="+12 345 6789"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-900 transition-all transform hover:bg-blue-800 delay-200 py-3 px-5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-10 md:mt-[10rem]">
          <div className="flex items-center">
            <FaBuilding className="mr-3 text-gray-500 text-2xl mt-4 sm:mt-6 md:mt-8 lg:mt-10" />
            <div>
              <h3 className="text-lg font-medium text-white">Company information:</h3>
              <p>BharatRoofers PVT</p>
              <p>bharatroofers@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-3 text-gray-500 text-2xl mt-4 sm:mt-6 md:mt-8 lg:mt-10" />
            <div>
              <h3 className="text-lg font-medium text-white">Address:</h3>
              <p>Bhopal</p>
              <p>Zip Code/Postal code: 03875</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-3 text-gray-500 text-2xl mt-4 sm:mt-6 md:mt-8 lg:mt-10" />
            <div>
              <h3 className="text-lg font-medium text-white">Call us:</h3>
              <p>Call us to speak to a member of our team. We are always happy to help.</p>
              <p>+1 234566789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
