import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as usersAPI from './usersAPI';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await usersAPI.fetchUsersFromAPI();
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const usersSelector = (state) => state.users;
export default usersSlice.reducer;
