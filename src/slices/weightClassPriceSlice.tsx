// COUNTS THE NUMBER OF INDIVIDUALS IN EACH WEIGHT CLASS
import { createSlice } from "@reduxjs/toolkit";
import SAMPLE_DATA from "../Data/SAMPLE_DATA";
import PersonType from "../utils/Types/PersonType";

const initialState = {
    drinkPrices: { light: 0, medium:0, heavy: 0 },
    foodPrices: { light: 0, medium: 0, heavy: 0 },
  }

const weightClassPriceSlice = createSlice({
  name: "weightClassCounter",
  initialState,
  reducers: {
    calculateWeightClassPrices: (state, actions) => {
      const { persons, weightDecimals, prices } = actions.payload;

      function getWeightTypeCountsByCategory(persons: PersonType[]) {
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

        state = {
          drinkPrices: {
            light: lightDrinkPrice,
            medium: mediumDrinkPrice,
            heavy: heavyDrinkPrice,
          },
          foodPrices: {
            light: lightFoodPrice,
            medium: mediumFoodPrice,
            heavy: heavyFoodPrice,
          },
        };
    },
    printStuff: (state, actions) => {
        console.log(`${state.drinkPrices.heavy}`);
        console.log(`${state.drinkPrices.medium}`);
        console.log(`${state.drinkPrices.light}`);
        console.log(`${state.foodPrices.heavy}`);
        console.log(`${state.foodPrices.medium}`);
        console.log(`${state.foodPrices.light}`);
    }
  },
});

export const {calculateWeightClassPrices, printStuff} = weightClassPriceSlice.actions

export default weightClassPriceSlice.reducer;


// // const PriceCalculator = () => {

// //     const prices = useSelector((state: RootState) => {
// //         return {
// //             totalDrinkPrice: state.totalPrice.totalDrinkPrice,
// //             totalFoodPrice: state.totalPrice.totalFoodPrice,
// //             totalPrice: state.totalPrice.totalDrinkPrice + state.totalPrice.totalFoodPrice
// //         }
// //     })

// //     const weightDecimals = useSelector((state: RootState) => {
// //         return {
// //           heavy: state.foodDrinkSetting.heavy / 100,
// //           medium: state.foodDrinkSetting.medium / 100,
// //           light: state.foodDrinkSetting.light / 100,
// //           none: state.foodDrinkSetting.none
// //         };
// //     })

// //     const persons = useSelector((state: RootState) => {
// //         return state.people.people;
// //     })



// //     const getFoodRatio = () => {
// //         const {food} = getWeightTypeCountsByCategory(persons)
// //         return (prices.totalFoodPrice / (weightDecimals.heavy * food.heavy + weightDecimals.medium * food.medium + weightDecimals.light * food.light))
// //     }

// //     const getDrinkRatio = () => {
// //         const {drinks} = getWeightTypeCountsByCategory(persons)
// //         return (prices.totalDrinkPrice / (weightDecimals.heavy * drinks.heavy + weightDecimals.medium * drinks.medium + weightDecimals.light * drinks.light))
// //     }

// //     function getWeightTypePriceByCategory() {
     
// //         const drinkRatio = getDrinkRatio();
// //         const foodRatio = getFoodRatio();

// //         const lightDrinkPrice = weightDecimals.light * drinkRatio;
// //         const mediumDrinkPrice = weightDecimals.medium * drinkRatio;
// //         const heavyDrinkPrice = weightDecimals.heavy * drinkRatio;
        
// //         const lightFoodPrice = weightDecimals.light * foodRatio;
// //         const mediumFoodPrice = weightDecimals.medium * foodRatio;
// //         const heavyFoodPrice = weightDecimals.heavy * foodRatio;

// //         return {
// //             drinkPrices: { light: lightDrinkPrice, medium: mediumDrinkPrice, heavy: heavyDrinkPrice },
// //             foodPrices: { light: lightFoodPrice, medium: mediumFoodPrice, heavy: heavyFoodPrice },
// //           }
// //     }  
// // } 


// export default weightClassPriceSlice.reducer