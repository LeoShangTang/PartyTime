import { createSlice } from "@reduxjs/toolkit";
import SAMPLE_DATA from "../Data/SAMPLE_DATA";

const initialState = {people: SAMPLE_DATA}; 

export const themeModeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    removePerson: (state, action) => {
        const { id } = action.payload;
        state.people = state.people.filter((person) => person.id !== id)
    },
    addPerson: (state, action) => {
        const { person } = action.payload;
        state.people = [person , ...state.people]
    },
    updatePerson: (state, action) => {
        const { updatedData } = action.payload;
        const personIndex = state.people.findIndex((person) => person.id === updatedData.id);
        if (personIndex !== -1) {
            state.people[personIndex] = { ...state.people[personIndex], ...updatedData };
        }
    }
  },
});

export const { removePerson, addPerson, updatePerson } = themeModeSlice.actions;

export default themeModeSlice.reducer;
