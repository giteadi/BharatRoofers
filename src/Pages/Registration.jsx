import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="absolute inset-0 bg-cover bg-center backdrop-filter backdrop-blur-sm"
        style={{
          backgroundImage: 'url("https://thinkshout.com/wp-content/uploads/2023/03/fade-to-black-header.jpg")',
          opacity: 0.6,  // Adjust opacity here (0.1 to 1.0 range)
          backdropFilter: 'blur(4px)'  // Optional: Adjust blur amount if needed
        }}
      ></div>
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md relative z-10">
        <div className="flex justify-center mb-4">
          <div className="">
            <img src="https://bharatroofers.com/static/media/Real-Estate-Logo.97cdaa8455c577626d89.png" alt="Logo" className="h-12 w-12 object-cover" />
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold mb-4">Create an account</h2>
        <p className="text-center text-gray-600 mb-6">Please enter your details to sign up.</p>
        
        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name..."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">E-Mail Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email..."
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password..."
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FiEyeOff size="20" /> : <FiEye size="20" />}
            </button>
          </div>
          <div className="mb-4 relative">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              id="confirmPassword"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Confirm your password..."
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-gray-500"
              onClick={toggleConfirmPasswordVisibility}
            >
              {confirmPasswordVisible ? <FiEyeOff size="20" /> : <FiEye size="20" />}
            </button>
          </div>
          <button className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-200">Sign up</button>
        </form>
        <p className="text-center mt-6 text-gray-600">
          Already have an account? <a href="#" className="text-blue-500">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
