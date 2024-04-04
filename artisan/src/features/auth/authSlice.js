import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Using axios for HTTP requests
import { saveToken, saveUserRole, clearToken, clearUserRole ,isAuthenticated} from '../../utils/auth';

// Assume loginUser is defined above
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://artisan-xqtv.onrender.com/api/users/login', userData);
      saveToken(response.data.token); 
      saveUserRole(response.data.role); 
      return { user: response.data.user, token: response.data.token, role: response.data.role };
    } catch (error) {
      const message = error.response?.data?.message || 'Unable to login. Please try again later.';
      return rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    role: null,
    status: 'idle',
    error: null,
    isAuthenticated: false,
  },
  reducers: {
    setAuthState: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setInitialAuthState: (state) => {
      state.isAuthenticated = isAuthenticated(); // Check if the user is authenticated
    },
    logout: (state) => {
      clearToken(); // Clear the JWT token from local storage
      clearUserRole(); // Clear the user role from local storage
      state.user = null;
      state.token = null;
      state.role = null;
      state.status = 'idle';
      state.error = null;
      state.isAuthenticated = false;
    },
    
    // Adding reducer for setting user login state explicitly
    setUserLoginState: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.isAuthenticated = true; // Set isAuthenticated to true upon successful login
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.isAuthenticated = false; // Ensure isAuthenticated is false if login fails
      });
  },
});

export const {setAuthState, logout, setUserLoginState } = authSlice.actions;


export default authSlice.reducer;
