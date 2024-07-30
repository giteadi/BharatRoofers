import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/slices/authSlice'; // Update the path if necessary
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin

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

  const handleGoogleLoginSuccess = async (response) => {
    try {
      const res = await fetch('http://localhost:5000/auth/google/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idToken: response.credential,
        }),
      });
      const data = await res.json();
      // Handle response data, e.g., store user data or tokens
      console.log('Login success:', data);
      toast.success('Google login successful');
      navigate('/'); // Redirect after successful Google login
    } catch (error) {
      console.error('Google login error:', error);
      toast.error('Google login failed');
    }
  };

  const handleGoogleLoginError = (error) => {
    console.error('Google login error:', error);
    toast.error('Google login failed');
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="absolute inset-0 bg-cover bg-center backdrop-filter backdrop-blur-sm"
        style={{
          backgroundImage: 'url("https://thinkshout.com/wp-content/uploads/2023/03/fade-to-black-header.jpg")',
          opacity: 0.6,
          backdropFilter: 'blur(4px)'
        }}
      ></div>
      <div className="bg-white md:p-5 rounded-xl shadow-lg w-full max-w-md relative">
        <div className="flex justify-center mb-4">
          <img src="https://bharatroofers.com/static/media/Real-Estate-Logo.97cdaa8455c577626d89.png" alt="Logo" className="h-12 w-12 object-cover" />
        </div>
        <h2 className="text-center text-2xl font-bold mb-4">Welcome back</h2>
        <p className="text-center text-gray-600 mb-6">Please enter your details to sign in.</p>
        <div className="flex justify-around items-center mb-6">
          <p>Login with Google</p>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginError}
            buttonText="Login with Google"
            className="flex items-center justify-center p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-600">OR</span>
          <hr className="w-full border-gray-300" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">E-Mail Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 pr-10"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-2 transform -translate-y-1/2"
            >
              {passwordVisible ? <FiEyeOff size="20" /> : <FiEye size="20" />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-200"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Sign in'}
          </button>
        </form>
        {error && <p className="text-center mt-4 text-red-600">{error}</p>}
        <p className="text-center mt-6 text-gray-600">
          Don't have an account? <a href="/register" className="text-blue-500">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
