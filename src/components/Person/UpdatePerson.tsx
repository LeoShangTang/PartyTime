import { FormEvent, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, TextField, MenuItem, InputAdornment } from "@mui/material";
import { updatePerson } from "../../slices/peopleSlice";
import foodDrinkDropMenu from "../../utils/FoodDrink/DropMenu";
import IPerson from "../../utils/Types/IPerson";
import validateType from "./WeightValidator";

type Props = {
    person: IPerson,
    handleClose: () => void,
    prices: {
      drinkPrice: number,
      foodPrice: number
    }
}

const boxStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.default",
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
    "& > :not(style)": { m: 2, width: "90%" }
  };
  
const EditPerson = ({person, handleClose, prices} : Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const drinksRef = useRef<HTMLInputElement>(null);
  const foodRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const updatedData: IPerson = {
        id: person.id,
        name: nameRef.current?.value || "",
        contact: contactRef.current?.value || "",
        food: validateType(foodRef.current?.value),
        drinks: validateType(drinksRef.current?.value),
      };
      dispatch(updatePerson({ updatedData }));
      handleClose();
    },
    [person.id, dispatch, handleClose]
  );

  return (
    <div>
      <Box sx={boxStyle} component="form" onSubmit={handleSubmit}>
        <TextField
          required
          label="Name"
          defaultValue={person.name}
          variant="standard"
          inputRef={nameRef}
        />
        <TextField
          required
          label="Contact"
          defaultValue={person.contact}
          variant="standard"
          inputRef={contactRef}
        />
        <TextField
          required
          select
          label="Drinks"
          defaultValue={person.drinks}
          variant="standard"
          inputRef={drinksRef}
        >
          {foodDrinkDropMenu.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          select
          label="Food"
          defaultValue={person.food}
          variant="standard"
          inputRef={foodRef}
        >
          {foodDrinkDropMenu.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          disabled
          type="number"
          label="Price of Drinks Owed"
          defaultValue={(Math.round(prices.drinkPrice * 100) / 100).toFixed(2)}
          variant="standard"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          required
          disabled
          type="number"
          label="Price of Food Owed"
          defaultValue={(Math.round(prices.foodPrice * 100) / 100).toFixed(2)}
          variant="standard"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" color="success" sx={{ width: "45%" }} type="submit">
            Update
          </Button>
          <Button variant="outlined" sx={{ width: "45%" }} onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default EditPerson