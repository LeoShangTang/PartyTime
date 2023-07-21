import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

type IFoodDrinkState = {
    heavy: number,
    medium: number,
    light: number,
    none: number
}

const initialState: IFoodDrinkState = {
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

export const foodDrinkSettingsSelector = createSelector(
    (state: RootState) => state.foodDrinkSetting.heavy,
    (state: RootState) => state.foodDrinkSetting.medium,
    (state: RootState) => state.foodDrinkSetting.light,
    (heavy, medium, light) => ({
      heavy, medium, light,
    })
  )

export const { updateFoodDrinkSetting } = foodDrinkSlice.actions;

export default foodDrinkSlice.reducer;
