import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

export interface ThemeState {
  mode: PaletteMode;
}

const initialState: ThemeState = {
  mode: "dark",
};

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
    },
  },
});

export const { toggleTheme } = themeModeSlice.actions;

export default themeModeSlice.reducer;
