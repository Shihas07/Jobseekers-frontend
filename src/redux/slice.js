// src/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employerDetails: null, // Initial state for employer details
};

const employerSlice = createSlice({
  name: 'employer',
  initialState,
  reducers: {
    setEmployer: (state, action) => {
      state.employerDetails = action.payload; // Set employer details
    },
    clearEmployer: (state) => {
      state.employerDetails = null; // Clear employer details
    },
  },
});

export const { setEmployer, clearEmployer } = employerSlice.actions;
export default employerSlice.reducer;
