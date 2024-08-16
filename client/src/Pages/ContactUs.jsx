import React, { useState } from 'react';
import axios from 'axios';
import { FaBuilding, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !phone || !message) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('https://bharatroofers.com/api/property/contacted', {
        name,
        email,
        phone,
        message
      });

      if (response.data.success) {
        setSuccess('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setError('');
      } else {
        setError(response.data.message || 'Failed to send your message. Please try again.');
        setSuccess('');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send your message. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="relative flex justify-center items-center bg-black text-white min-h-screen p-8 md:mt-20">
      <div className="absolute inset-0 bg-cover bg-center backdrop-filter backdrop-blur-sm" style={{ backgroundImage: 'url("https://thumbs.wbm.im/pw/small/e79ed78f33ea2825b7bb5598d66fe60c.jpg")', opacity: 0.3 }}></div>
      <div className="relative bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-screen-lg flex flex-col lg:flex-row gap-8 justify-center items-center">
        <div className="w-full lg:w-1/2 max-w-md">
          <h2 className="mb-4 text-4xl font-extrabold">Contact Us</h2>
          <p className="mb-8">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number</label>
              <input
                type="text"
                id="phone"
                className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="+12 345 6789"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg shadow-sm border border-gray-600 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-900 transition-all hover:bg-blue-800 py-3 px-5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none"
            >
              Send Message
            </button>
            {success && <p className="text-green-500 mt-4">{success}</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="flex items-center">
            <FaBuilding className="mr-3 text-gray-500 text-2xl" />
            <div>
              <h3 className="text-lg font-medium">Company Information:</h3>
              <p>BharatRoofers PVT</p>
              <p>info@bharatroofers.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-3 text-gray-500 text-2xl" />
            <div>
              <h3 className="text-lg font-medium">Address:</h3>
              <p>1815 Wright Town, Jabalpur,</p>
              <p> Madhya pradesh INDIA 482002</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-3 text-gray-500 text-2xl" />
            <div>
              <h3 className="text-lg font-medium">Call Us:</h3>
              <p>Call us to speak to a member of our team. We are always happy to help.</p>
              <p> +91-8839280515</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
