import { createSlice } from '@reduxjs/toolkit';
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

export const devicesSlice = createSlice({
  name: 'devices',
  initialState: devicesState,
  //   extraReducers: {
  //     [fetchAllContacts.pending]: handlePending,
  //     [fetchAllContacts.fulfilled](state, action) {
  //       normalizeState(state);
  //       state.contacts.items = action.payload;
  //     },
  //     [fetchAllContacts.rejected]: handleRejected,
  //     [addContact.fulfilled](state, action) {
  //       normalizeState(state);
  //       state.contacts.items.push(action.payload);
  //     },
  //     [addContact.rejected]: handleRejected,
  //     [deleteContact.fulfilled](state, action) {
  //       normalizeState(state);
  //       const index = state.contacts.items.findIndex(
  //         task => task.id === action.payload.id
  //       );
  //       state.contacts.items.splice(index, 1);
  //     },
  //     [deleteContact.rejected]: handleRejected,
  //     [updateContact.fulfilled](state, action) {
  //       normalizeState(state);
  //       const index = state.contacts.items.findIndex(
  //         task => task.id === action.payload.id
  //       );
  //       console.log(action.payload);
  //       const id = action.payload.id;
  //       const name = action.payload.name;
  //       const number = action.payload.number;
  //       state.contacts.items.splice(index, 1, { id, name, number });
  //     },
  //     [updateContact.rejected]: handleRejected,
  //   },
});
export const devicesReducer = devicesSlice.reducer;