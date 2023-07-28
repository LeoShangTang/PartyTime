import { createSlice } from "@reduxjs/toolkit";
import IPerson from "../utils/Types/IPerson";
import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

let initialState = {
    drinkPrices: { light: 0, medium:0, heavy: 0 },
    foodPrices: { light: 0, medium: 0, heavy: 0 },
  }

const weightClassPrices = localStorage.getItem("weightClassPrices");
  
if (weightClassPrices) {
  initialState = JSON.parse(weightClassPrices);
}

const weightClassPriceSlice = createSlice({
  name: "weightClassCounter",
  initialState,
  reducers: {
    calculateWeightClassPrices: (state, actions) => {
      const { persons, weightDecimals, prices } = actions.payload;

      function getWeightTypeCountsByCategory(persons: IPerson[]) {
        let weightTypeCountHash = {
          drinks: { light: 0, medium: 0, heavy: 0, none: 0 },
          food: { light: 0, medium: 0, heavy: 0, none: 0 },
        };
        for (const person of persons) {
          weightTypeCountHash.drinks[person.drinks]++;
          weightTypeCountHash.food[person.food]++;
        }
        return weightTypeCountHash;
      }

      const getFoodRatio = () => {
        const { food } = getWeightTypeCountsByCategory(persons);
        return (
          prices.totalFoodPrice /
          (weightDecimals.heavy * food.heavy +
            weightDecimals.medium * food.medium +
            weightDecimals.light * food.light)
        );
      };

      const getDrinkRatio = () => {
        const { drinks } = getWeightTypeCountsByCategory(persons);
        return (
          prices.totalDrinkPrice /
          (weightDecimals.heavy * drinks.heavy +
            weightDecimals.medium * drinks.medium +
            weightDecimals.light * drinks.light)
        );
      };

      const drinkRatio = getDrinkRatio();
      const foodRatio = getFoodRatio();

      const lightDrinkPrice = weightDecimals.light * drinkRatio;
      const mediumDrinkPrice = weightDecimals.medium * drinkRatio;
      const heavyDrinkPrice = weightDecimals.heavy * drinkRatio;

      const lightFoodPrice = weightDecimals.light * foodRatio;
      const mediumFoodPrice = weightDecimals.medium * foodRatio;
      const heavyFoodPrice = weightDecimals.heavy * foodRatio;

      state.drinkPrices = {
        light: lightDrinkPrice,
        medium: mediumDrinkPrice,
        heavy: heavyDrinkPrice,
      };
      state.foodPrices = {
        light: lightFoodPrice,
        medium: mediumFoodPrice,
        heavy: heavyFoodPrice,
      };
      localStorage.setItem("weightClassPrices", JSON.stringify(state));
    },
  },
});

export const {calculateWeightClassPrices} = weightClassPriceSlice.actions

export const weightDecimalsSelector = createSelector(
  (state: RootState) => state.foodDrinkSetting.heavy,
  (state: RootState) => state.foodDrinkSetting.medium,
  (state: RootState) => state.foodDrinkSetting.light,
  (state: RootState) => state.foodDrinkSetting.none,
  (heavy, medium, light, none) => ({
    heavy: heavy / 100,
    medium: medium / 100,
    light: light / 100,
    none: none,
  })
);

export default weightClassPriceSlice.reducer;