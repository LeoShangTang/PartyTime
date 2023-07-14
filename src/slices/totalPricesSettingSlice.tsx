import { createSlice } from "@reduxjs/toolkit";

type totalPriceType = {
    totalDrinkPrice: number,
    totalFoodPrice: number,
}

const initialState: totalPriceType = {
    totalDrinkPrice: 0,
    totalFoodPrice: 0,
  };
  

const totalPriceSlice = createSlice({
    name: "totalPrice",
    initialState,
    reducers: {
        updateTotalPrice: (state, action) => {
            const {totalDrinkPrice, totalFoodPrice} = action.payload;
            state.totalDrinkPrice = Number(totalDrinkPrice);
            state.totalFoodPrice = Number(totalFoodPrice);
        }
    }
})

export const { updateTotalPrice } = totalPriceSlice.actions;

export default totalPriceSlice.reducer;