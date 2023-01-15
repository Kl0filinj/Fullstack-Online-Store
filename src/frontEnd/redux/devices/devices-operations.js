import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'http://localhost:1488/api';

export const fetchAllDevices = createAsyncThunk(
  'devices/fetchAll',
  async (newDevices = false, thunkAPI) => {
    const queryString = newDevices === true ? '/devices/new' : '/devices';
    try {
      const response = await axios.get(queryString);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
