import { FormEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, TextField, MenuItem } from "@mui/material";
import { updatePerson } from "../../slices/peopleSlice";
import foodDrinkDropMenu from "../../utils/FoodDrink/DropMenu";
import PersonType from "../../utils/Types/PersonType";
  

type Props = {
    person: PersonType,
    handleClose: () => void,
}

const style = {
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
  

const EditPerson = ({person, handleClose} : Props) => {
  
  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const drinksRef = useRef<HTMLInputElement>(null);
  const foodRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedData: PersonType = {
      id: person.id,
      name: nameRef.current?.value || "",
      contact: contactRef.current?.value || "",
      food: foodRef.current?.value || "",
      drinks: drinksRef.current?.value || "",
    };
    dispatch(updatePerson({updatedData}))
    handleClose();
  }

    return (
      <div>
        <Box sx={style} component="form" onSubmit={handleSubmit}>
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
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" color="success" sx={{ width: "45%" }} type="submit">
              Update
            </Button>
            <Button
              variant="outlined"
              sx={{ width: "45%" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </div>
    );
}

export default EditPerson