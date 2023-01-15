import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllDevices = createAsyncThunk(
  'devices/fetchAll',
  async (newDevices = false, thunkAPI) => {
    const queryString = newDevices === true ? '/devices/new' : '/devices';
    try {
      const response = await axios.get(queryString);
      return response.data.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
