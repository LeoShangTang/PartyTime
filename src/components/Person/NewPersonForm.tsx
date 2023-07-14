import TextField from '@mui/material/TextField';
import fDOptions from '../../utils/FoodDrink/Options';
import MenuItem from '@mui/material/MenuItem';
import { Box, Button, Typography } from '@mui/material';
import foodDrinkDropMenu from '../../utils/FoodDrink/DropMenu';
import { useRef, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addPerson } from '../../slices/peopleSlice';
import PersonType from '../../utils/Types/PersonType';

type Props = {
  handleClose: () => void;
};

const NewForm = ({handleClose} : Props) => {

  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const drinksRef = useRef<HTMLInputElement>(null);
  const foodRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPerson: PersonType = {
      id: crypto.randomUUID(),
      name: nameRef.current?.value || "",
      contact: contactRef.current?.value || "",
      food: foodRef.current?.value || "",
      drinks: drinksRef.current?.value || "",
    };
    dispatch(addPerson({person: newPerson}));
    handleClose();
  };

    return (
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2,  width: "90%" },
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" component="h2" sx={{textAlign:"center"}}>
          Add Person
        </Typography>
        <TextField required id="name" label="Name" inputRef={nameRef}/>
        <TextField required id="contact" label="Contact" inputRef={contactRef}/>
        <TextField
          required
          id="drinks"
          select
          label="Drinks"
          defaultValue={fDOptions.none}
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
          id="food"
          select
          label="Food"
          defaultValue={fDOptions.none}
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
            Add
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
    );
}

export default NewForm; 