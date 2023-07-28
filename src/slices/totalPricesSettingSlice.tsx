import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ITotalPrice = {
    totalDrinkPrice: number,
    totalFoodPrice: number,
}

let initialState: ITotalPrice = {
    totalDrinkPrice: 0,
    totalFoodPrice: 0,
  };
  
const totalPrices = localStorage.getItem("totalPrices");
  
if (totalPrices) {
  initialState = JSON.parse(totalPrices);
}

const totalPriceSlice = createSlice({
    name: "totalPrice",
    initialState,
    reducers: {
        updateTotalPrice: (state, action) => {
            const {totalDrinkPrice, totalFoodPrice} = action.payload;
            state.totalDrinkPrice = Number(totalDrinkPrice);
            state.totalFoodPrice = Number(totalFoodPrice);
            localStorage.setItem("totalPrices", JSON.stringify(state));
        }
    }
})

export const totalPriceSelector = createSelector(
    (state: RootState) => state.totalPrice.totalDrinkPrice,
    (state: RootState) => state.totalPrice.totalFoodPrice,
    (totalDrinkPrice: number, totalFoodPrice: number) => ({
      totalDrinkPrice,
      totalFoodPrice,
      totalPrice: totalFoodPrice + totalDrinkPrice
    })
  );
export const { updateTotalPrice } = totalPriceSlice.actions;
export default totalPriceSlice.reducer;