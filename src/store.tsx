import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeModeSlice";
import foodDrinkSettingReducer from "./slices/foodDrinkSettingSlice";
import peopleReducer from "./slices/peopleSlice";
import totalPricesReducer from "./slices/totalPricesSettingSlice";
import weightClassPriceReducer from "./slices/weightClassPriceSlice";

const rootReducer = combineReducers({
  themeToggler: themeReducer,
  foodDrinkSetting: foodDrinkSettingReducer,
  people: peopleReducer,
  totalPrice: totalPricesReducer,
  weightClassPrice : weightClassPriceReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;

