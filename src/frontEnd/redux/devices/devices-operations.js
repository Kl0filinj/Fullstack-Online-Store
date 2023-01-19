import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllDevices = createAsyncThunk(
  'devices/fetchAll',
  async ({ newDevices = false, filter = [] }, thunkAPI) => {
    console.log('123121');
    const queryString =
      newDevices === true
        ? `/devices/new?${filter.join('')}`
        : `/devices?${filter.join('')}`;
    try {
      const response = await axios.get(queryString);
      console.log(response.data);
      return {
        response: response.data.data.data,
        status: response.data.data.status,
      };
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
      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDeviceById = createAsyncThunk(
  'devices/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/devices/${id}`);
      return response.data.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
