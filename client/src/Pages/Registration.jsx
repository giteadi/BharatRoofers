import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../Redux/slices/authSlice'; // Update the path if necessary
import toast from 'react-hot-toast';
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Import eye icons

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!name || !email || !phone || !password || !confirmPassword) {
      toast.error('All fields are required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Invalid email address');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Dispatch the registerUser action
    dispatch(registerUser({ name, email, phone, password }))
      .unwrap()
      .then(() => {
        navigate('/login'); // Redirect to the login page after successful registration
      })
      .catch(() => {
        // Error handling is done in the thunk
      });
  };

  return (
    <div className="relative flex justify-center items-center bg-black text-white min-h-screen p-8">
      <div
        className="absolute inset-0 bg-cover bg-center backdrop-filter backdrop-blur-sm"
        style={{
          backgroundImage: 'url("https://thumbs.wbm.im/pw/small/e79ed78f33ea2825b7bb5598d66fe60c.jpg")',
          opacity: 0.3,
        }}
      ></div>
      <div className="relative bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-4xl font-extrabold mb-4">Create an Account</h2>
          <p className="text-center mb-8">Please enter your details to sign up.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full max-w-lg p-2.5"
              placeholder="Enter your full name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">E-Mail Address</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full max-w-lg p-2.5"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">Mobile Number</label>
            <input
              type="text"
              id="phone"
              className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full max-w-lg p-2.5"
              placeholder="Enter your mobile number..."
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full max-w-lg p-2.5 pr-12" // Adjust padding to make room for the icon
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute inset-y-0 right-3 flex items-center top-5"
            >
              {passwordVisible ? <HiEyeOff className="text-gray-400" /> : <HiEye className="text-gray-400" />}
            </button>
          </div>
          <div className="relative ">
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm Password</label>
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              id="confirmPassword"
              className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full max-w-lg p-2.5 pr-12" // Adjust padding to make room for the icon
              placeholder="Confirm your password..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              className="absolute inset-y-0 right-3 flex items-center top-5"
            >
              {confirmPasswordVisible ? <HiEyeOff className="text-gray-400" /> : <HiEye className="text-gray-400" />}
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-800 py-3 px-5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Sign Up'}
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
        <p className="text-center mt-6 text-gray-300 text-sm">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
