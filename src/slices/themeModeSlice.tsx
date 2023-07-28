import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

export interface ThemeState {
  mode: PaletteMode;
}

let initialState: ThemeState = {
  mode: "dark",
};

const theme = localStorage.getItem("theme");
  
if (theme) {
  initialState = JSON.parse(theme);
}

export const themeModeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.mode === "dark") {
        state.mode = "light";
      } else {
        state.mode = "dark";
      }
      localStorage.setItem("theme", JSON.stringify(state));
    },
  },
});

export const { toggleTheme } = themeModeSlice.actions;

export default themeModeSlice.reducer;
