import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  educationData: [],
};

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    addEducation: (state, action) => {
      state.educationData.push(action.payload);
    },
    setEducation: (state, action) => {
      state.educationData = action.payload;
    },
  },
});

export const { addEducation, setEducation } = educationSlice.actions;
export default educationSlice.reducer;
