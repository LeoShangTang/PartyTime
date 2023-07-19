import PersonType from "../Types/PersonType";

type WeightDecimal = {
    heavy: number,
    medium: number,
    light: number,
    none: 0,
}

type Prices = {
  totalDrinkPrice: number;
  totalFoodPrice: number;
  totalPrice: number;
};

const getFoodDrinkRatios = (persons: PersonType[], weightDecimals: WeightDecimal, prices: Prices) => {

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

  function getWeightTypePriceByCategory() {
    const drinkRatio = getDrinkRatio();
    const foodRatio = getFoodRatio();

    const lightDrinkPrice = weightDecimals.light * drinkRatio;
    const mediumDrinkPrice = weightDecimals.medium * drinkRatio;
    const heavyDrinkPrice = weightDecimals.heavy * drinkRatio;

    const lightFoodPrice = weightDecimals.light * foodRatio;
    const mediumFoodPrice = weightDecimals.medium * foodRatio;
    const heavyFoodPrice = weightDecimals.heavy * foodRatio;

    return {
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
  }
}

export default getFoodDrinkRatios;