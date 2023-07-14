import { Box, Button, Typography, FormLabel, TextField, InputAdornment } from '@mui/material';
import { useDispatch } from 'react-redux';
import { FormEvent, useRef } from 'react';

import { updateTotalPrice } from '../../../slices/totalPricesSettingSlice';

type Props = {
  handleClose: () => void,
  totalDrinkPrice: number,
  totalFoodPrice: number,
}

const PriceSetting = ({handleClose, totalDrinkPrice, totalFoodPrice} : Props) => {
  const totalFoodPriceRef = useRef<HTMLInputElement>(null);
  const totalDrinkPriceRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const totalDrinkPrice = totalDrinkPriceRef.current?.value || 0;
    const totalFoodPrice = totalFoodPriceRef.current?.value || 0;
    dispatch(updateTotalPrice({ totalDrinkPrice, totalFoodPrice }));
    handleClose();
  };

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
    "& > :not(style)": { m: 2, width: "90%" },
  };

  return (
    <Box component="form" sx={style} onSubmit={handleSubmit}>
      <Typography variant="h6" component="h2" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Price Settings
      </Typography>
      <TextField
        label="Total Drink Price"
        type="number"
        defaultValue={totalDrinkPrice}
        inputRef={totalDrinkPriceRef}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
          inputProps: { min: 0, step: 10 },
        }}
      />
      <TextField
        label="Total Food Price"
        type="number"
        defaultValue={totalFoodPrice}
        inputRef={totalFoodPriceRef}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          color="success"
          type="submit"
          sx={{ width: "45%" }}
        >
          Update
        </Button>
        <Button variant="outlined" onClick={handleClose} sx={{ width: "45%" }}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

export default PriceSetting; 