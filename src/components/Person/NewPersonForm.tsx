import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box, Button, Typography } from '@mui/material';
import foodDrinkDropMenu from '../../utils/FoodDrink/DropMenu';
import { useRef, FormEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addPerson } from '../../slices/peopleSlice';
import IPerson from '../../utils/Types/IPerson';
import validateWeightType from '../../utils/Validator/WeightValidator';

type Props = {
  handleClose: () => void;
};

const boxStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
  "@media (max-width: 600px)": {
    width:300,
  },
  "& > :not(style)": { m: 2,  width: "90%"} 
}

const NewForm = ({handleClose} : Props) => {

  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const drinksRef = useRef<HTMLInputElement>(null);
  const foodRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPerson: IPerson = {
      id: crypto.randomUUID(),
      name: nameRef.current?.value || "",
      contact: contactRef.current?.value || "",
      food: validateWeightType(foodRef.current?.value),
      drinks: validateWeightType(drinksRef.current?.value),
    };
    dispatch(addPerson({person: newPerson}));
    handleClose();
  }, [handleClose, dispatch]);

    return (
      <Box component="form" sx={boxStyle} onSubmit={handleSubmit}>
        <Typography variant="h6" component="h2" sx={{textAlign:"center"}}>
          Add Person
        </Typography>
        <TextField required label="Name" inputRef={nameRef}/>
        <TextField required label="Contact" inputRef={contactRef}/>
        <TextField required select label="Drinks" defaultValue={"none"} inputRef={drinksRef}>
          {foodDrinkDropMenu.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField required select label="Food" defaultValue={"none"} inputRef={foodRef}>
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
          <Button variant="outlined" sx={{ width: "45%" }} onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    );
}

export default NewForm; 