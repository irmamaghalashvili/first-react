import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skills: [],
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const { addSkill, setSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
