import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../Redux/slices/authSlice'; // Update the path if necessary
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <div className="absolute inset-0 bg-cover bg-center backdrop-filter backdrop-blur-sm"
        style={{
          backgroundImage: 'url("https://thumbs.wbm.im/pw/small/e79ed78f33ea2825b7bb5598d66fe60c.jpg")',
          opacity: 0.6,
          backdropFilter: 'blur(4px)'
        }}
      ></div>
      <div className="bg-white md:p-4 rounded-xl shadow-lg w-full max-w-md relative my-8">
        <div className="flex justify-center mb-3">
          <img src="https://bharatroofers.com/static/media/Real-Estate-Logo.97cdaa8455c577626d89.png" alt="Logo" className="h-10 w-10 object-cover" />
        </div>
        <h2 className="text-center text-xl font-bold mb-3">Create an account</h2>
        <p className="text-center text-gray-600 mb-4">Please enter your details to sign up.</p>
        <form onSubmit={handleSubmit} className='p-4'>
          <div className="mb-3">
            <label htmlFor="name" className="block text-gray-700 text-sm mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-1.5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block text-gray-700 text-sm mb-1">E-Mail Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-1.5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="block text-gray-700 text-sm mb-1">Mobile Number</label>
            <input
              type="text"
              id="phone"
              className="w-full p-1.5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your mobile number..."
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3 relative flex items-center">
            <label htmlFor="password" className="block text-gray-700 text-sm mb-1 flex-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full p-1.5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 pr-10"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="mb-3 relative flex items-center pr-3">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm mb-1 flex-1">Confirm Password</label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              className="w-full p-1.5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 pr-10"
              placeholder="Confirm your password..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-200"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Sign up'}
          </button>
        </form>
        {error && <p className="text-center mt-4 text-red-600 text-sm">{error}</p>}
        <p className="text-center mt-4 text-gray-600 text-sm">
          Already have an account? <a href="/login" className="text-blue-500">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
