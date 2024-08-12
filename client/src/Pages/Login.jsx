import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/slices/authSlice'; // Update the path if necessary
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Updated to match registration form

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!email || !password) {
      toast.error('All fields are required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Invalid email address');
      return;
    }

    try {
      dispatch(loginUser({ email, password }))
        .unwrap()
        .then(() => {
          toast.success('Login successful');
          navigate('/'); // Redirect to homepage or desired page after login
        })
        .catch(() => {
          // Error handling is done in the thunk
        });
    } catch (err) {
      toast.error('Login failed');
    }
  };

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

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
          <h2 className="text-4xl font-extrabold mb-4">Welcome Back</h2>
          <p className="text-center mb-8">Please enter your details to sign in.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
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
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center top-5"
            >
              {passwordVisible ? <HiEyeOff className="text-gray-400" /> : <HiEye className="text-gray-400" />}
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-800 py-3 px-5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
        <p className="text-center mt-6 text-gray-300 text-sm">
          Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
