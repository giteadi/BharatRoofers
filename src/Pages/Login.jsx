import React, { useState } from 'react';
import { FaApple, FaGoogle, FaTwitter } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import logo from '../Assets/logo.png'
const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src="https://bharatroofers.com/static/media/Real-Estate-Logo.97cdaa8455c577626d89.png" alt="Logo" className="h-12 w-12 object-cover" />
        </div>
        <h2 className="text-center text-2xl font-bold mb-4">Welcome back</h2>
        <p className="text-center text-gray-600 mb-6">Please enter your details to sign in.</p>
        <div className="flex justify-around items-center mb-6">
          <p>Login with Google</p>
          <button className="flex items-center justify-center w-1/3 p-2 border rounded-md">
            <FaGoogle size="24" />
          </button>
          
        </div>
        <div className="flex items-center justify-between mb-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-600">OR</span>
          <hr className="w-full border-gray-300" />
        </div>
        <form>
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
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-500 mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-500">Forgot password?</a>
          </div>
          <button className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-200">Sign in</button>
        </form>
        <p className="text-center mt-6 text-gray-600">
          Don't have an account yet? <a href="#" className="text-blue-500">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
