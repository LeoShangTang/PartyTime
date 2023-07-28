import { createSlice } from "@reduxjs/toolkit";
import SAMPLE_DATA from "../Data/SAMPLE_DATA";

let initialState= {persons: SAMPLE_DATA}; 

const persons = localStorage.getItem("persons");
  
if (persons) {
  initialState = JSON.parse(persons);
}

export const themeModeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    removePerson: (state, action) => {
        const { id } = action.payload;
        state.persons = state.persons.filter((person) => person.id !== id);
        localStorage.setItem("persons", JSON.stringify(state));
    },
    addPerson: (state, action) => {
        const { person } = action.payload;
        state.persons = [person , ...state.persons]
        localStorage.setItem("persons", JSON.stringify(state));
    },
    updatePerson: (state, action) => {
        const { updatedData } = action.payload;
        const personIndex = state.persons.findIndex((person) => person.id === updatedData.id);
        if (personIndex !== -1) {
            state.persons[personIndex] = { ...state.persons[personIndex], ...updatedData };
            localStorage.setItem("persons", JSON.stringify(state));
        }
    }
  },
});

export const { removePerson, addPerson, updatePerson } = themeModeSlice.actions;

export default themeModeSlice.reducer;
