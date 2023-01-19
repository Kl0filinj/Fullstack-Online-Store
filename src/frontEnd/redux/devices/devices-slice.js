import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllDevices,
  fetchAllTypes,
  fetchAllBrands,
} from './devices-operations';
// import {
//   fetchAllContacts,
//   addContact,
//   deleteContact,
//   updateContact,
// } from './contacts-operations';

const devicesState = {
  devices: [],
  types: [],
  brands: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  console.log(action.payload);
  state.isLoading = false;
  state.error = action.payload;
};

const normalizeState = state => {
  state.isLoading = false;
  state.error = null;
};

export const devicesSlice = createSlice({
  name: 'devices',
  initialState: devicesState,
  extraReducers: {
    [fetchAllDevices.pending]: handlePending,
    [fetchAllDevices.fulfilled](state, action) {
      normalizeState(state);
      state.devices = action.payload;
      console.log(state.devices);
    },
    [fetchAllDevices.rejected]: handleRejected,

    [fetchAllTypes.pending]: handlePending,
    [fetchAllTypes.fulfilled](state, action) {
      normalizeState(state);
      state.types = action.payload;
      console.log(state.devices);
    },
    [fetchAllTypes.rejected]: handleRejected,

    [fetchAllBrands.pending]: handlePending,
    [fetchAllBrands.fulfilled](state, action) {
      normalizeState(state);
      state.brands = action.payload;
      console.log(state.devices);
    },
    [fetchAllBrands.rejected]: handleRejected,
  },
});
export const devicesReducer = devicesSlice.reducer;
