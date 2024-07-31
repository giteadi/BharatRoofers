import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

// Async thunk to handle user login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const { email, password } = credentials;
      // Make API call to login the user
      const response = await axios.post('https://bharatroofers.com/api/property/login', credentials);
      const data = response.data;

      if (data.success) {
        return data.user; // Assuming the API returns user data on successful login
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      toast.error('Login failed');
      return rejectWithValue(error.response ? error.response.data.error : error.message);
    }
  }
);

// Async thunk to handle user registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://bharatroofers.com/api/property/register', userData);
      const data = response.data;

      if (data.success) {
        return data.user; // Assuming the API returns user data on successful registration
      } else {
        throw new Error(data.message || 'Registration failed');
      }
    } catch (error) {
      toast.error('Registration failed');
      return rejectWithValue(error.response ? error.response.data.error : error.message);
    }
  }
);

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: !!localStorage.getItem('user'),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(action.payload));
        toast.success('Registration successful');
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(action.payload));
        toast.success('Login successful');
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
