import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllDevices,
  fetchAllTypes,
  fetchAllBrands,
  fetchDeviceById,
} from './devices-operations';
// import {
//   fetchAllContacts,
//   addContact,
//   deleteContact,
//   updateContact,
// } from './contacts-operations';

const devicesState = {
  devices: [],
  addictionalDevices: [],
  types: [],
  brands: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  console.log(action);
  state.isLoading = false;
  state.error = action.error.message;
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
      console.log(action.payload);
      if (action.payload.status === 'initial') {
        state.devices = action.payload.response;
      }
      if (action.payload.status === 'addictional') {
        state.addictionalDevices = action.payload.response;
      }
    },
    [fetchAllDevices.rejected]: handleRejected,

    [fetchAllTypes.pending]: handlePending,
    [fetchAllTypes.fulfilled](state, action) {
      normalizeState(state);
      state.types = action.payload;
    },
    [fetchAllTypes.rejected]: handleRejected,

    [fetchAllBrands.pending]: handlePending,
    [fetchAllBrands.fulfilled](state, action) {
      normalizeState(state);
      state.brands = action.payload;
      console.log(state.brands);
    },
    [fetchAllBrands.rejected]: handleRejected,

    [fetchDeviceById.pending]: handlePending,
    [fetchDeviceById.fulfilled](state, action) {
      normalizeState(state);
      state.devices = [];
      state.devices = [action.payload];
      console.log(state.devices);
    },
    [fetchDeviceById.rejected]: handleRejected,
  },
});
export const devicesReducer = devicesSlice.reducer;
