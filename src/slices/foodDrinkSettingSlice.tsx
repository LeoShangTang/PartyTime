import { createSlice } from "@reduxjs/toolkit";

type foodDrinkState = {
    heavy: number,
    medium: number,
    light: number,
    none: number
}

const initialState: foodDrinkState = {
    heavy: 60,
    medium: 30,
    light: 10,
    none: 0
  };
  
export const foodDrinkSlice = createSlice({
    name: "foodDrink",
    initialState,
    reducers: {
        updateFoodDrinkSetting: (state, action) => {
            const {heavyPercent, mediumPercent, lightPercent} = action.payload;
            state.heavy = heavyPercent;
            state.medium = mediumPercent;
            state.light = lightPercent;
        }
    }
})


export const { updateFoodDrinkSetting } = foodDrinkSlice.actions;

export default foodDrinkSlice.reducer;
