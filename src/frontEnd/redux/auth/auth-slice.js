import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logInUser,
  //   logOutUser,
  //   refreshUser,
} from './auth-operations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const authState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logInUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
});

// const persistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export const { addTask, deleteTask } = authSlice.actions;
export const authReducer = authSlice.reducer;
