import { useSelector } from "react-redux";
import { RootState } from "../store";
import PersonType from "./Types/PersonType";
const PriceCalculator = (foodWeight: string, drinkWeight: string) => {

    const prices = useSelector((state: RootState) => {
        return {
            totalDrinkPrice: state.totalPrice.totalDrinkPrice,
            totalFoodPrice: state.totalPrice.totalFoodPrice,
            totalPrice: state.totalPrice.totalDrinkPrice + state.totalPrice.totalFoodPrice
        }
    })

    const weightDecimals = useSelector((state: RootState) => {
        return {
          heavy: state.foodDrinkSetting.heavy / 100,
          medium: state.foodDrinkSetting.medium / 100,
          light: state.foodDrinkSetting.light / 100,
          none: state.foodDrinkSetting.none
        };
    })

    const persons = useSelector((state: RootState) => {
        return state.people.people;
    })

    // const getFoodWeightTypeCount = (persons: PersonType[], foodWeightType: string): number => {
    //   return persons.filter(withFoodWeightType).length;

    //   function withFoodWeightType(person: PersonType) {
    //     return person.food === foodWeightType;
    //   }
    // }

    // const getDrinkWeightTypeCount = (persons: PersonType[], drinkWeightType: string): number => {
    //   return persons.filter(withDrinkWeightType).length;

    //   function withDrinkWeightType(person: PersonType) {
    //     return person.drinks === drinkWeightType;
    //   }
    // }

    // {
    //     drinks: { light: number; medium: number; heavy: number };
    //     food: { light: number; medium: number; heavy: number };
    //   } 

    function getWeightTypeCountsByCategory(persons: PersonType[]) {
        let weightTypeCountHash =  {
            drinks: { light: 0, medium: 0, heavy: 0, none: 0 },
            food: { light: 0, medium: 0, heavy: 0, none: 0 },
          }
        for (const person of persons) {
            weightTypeCountHash.drinks[person.drinks]++;
            weightTypeCountHash.food[person.food]++;
        }
        return weightTypeCountHash;
    }

    function getWeightTypePriceByCategory(persons: PersonType[]) {
        let weightTypePriceHash =  {
            drinks: { light: 0, medium: 0, heavy: 0 },
            food: { light: 0, medium: 0, heavy: 0 },
          }
    }

    const getHeavyFoodPrice = () => {
        const {food} = getWeightTypeCountsByCategory(persons)
        return (weightDecimals.heavy * (prices.totalPrice / (weightDecimals.heavy )))
    }

    const getDrinkWeightTypeCount = getWeightTypeCountFunc('drinks')
    const getFoodWeightTypeCount = getWeightTypeCountFunc('food')

    function getWeightTypeCountFunc (consumptionType: 'food' | 'drinks') {
        return (persons: PersonType[], weightType: string): number => {
            return persons.filter(withWeightType).length;
      
            function withWeightType(person: PersonType) {
              return person[consumptionType] === weightType;
            }
          }
    }    

    // return data.filter((person) => person.drinks === weightType).length

    // const stuff = {
    //     heavyFoodCounter: getFoodWeightTypeCount(people, fDOptions.heavy),
    //     mediumFoodCounter: getFoodWeightTypeCount(people, fDOptions.medium),
    //     lightFoodCounter: getFoodWeightTypeCount(people, fDOptions.light),
        
    //     heavyDrinkCounter: getFoodWeightTypeCount(people, fDOptions.heavy),
    //     mediumDrinkCounter: getFoodWeightTypeCount(people, fDOptions.medium),
    //     lightDrinkCounter: getFoodWeightTypeCount(people, fDOptions.light),
    // }

    // const calculateHeavyPrice = (weightType: string) => {
    //     if (weightType === "food"){
    //       return (
    //         prices.totalPrice /
    //         (stuff.heavyFoodCounter +
    //           stuff.mediumFoodCounter * weightDecimals.mediumDecimal +
    //           stuff.lightFoodCounter * weightDecimals.lightDecimal)
    //       );
    //     }
    //     return (
    //         prices.totalPrice /
    //         (stuff.heavyDrinkCounter +
    //           stuff.mediumDrinkCounter * weightDecimals.mediumDecimal +
    //           stuff.lightDrinkCounter * weightDecimals.lightDecimal)
    //       );
    // }
    
} 

export default PriceCalculator;
