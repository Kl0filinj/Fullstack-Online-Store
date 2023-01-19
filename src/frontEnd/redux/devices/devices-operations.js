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

export const fetchAllTypes = createAsyncThunk(
  'devices/fetchTypes',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/typeAndBrand/types');
      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllBrands = createAsyncThunk(
  'devices/fetchBrands',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/typeAndBrand/brands');
      console.log(response);
      return response.data.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
