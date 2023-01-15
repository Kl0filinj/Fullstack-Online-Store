import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:1488/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const responce = await axios.post('/users/signup', credentials);
      // После успешной регистрации добавляем токен
      console.log(responce);
      //   token.set(responce.data.token);
      //   toast.success(`Registration was successful`);
      return responce.data;
    } catch (error) {
      //   toast.error('Incorrect data for registration, try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const responce = await axios.post('/users/login', credentials);
      console.log(responce);
      // После успешной logIn добавляем токен
      token.set(responce.data.token);
      //   toast.success(`Welcome back to your contact book`);
      return responce.data;
    } catch (error) {
      //   toast.error('Incorrect password or email, try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
