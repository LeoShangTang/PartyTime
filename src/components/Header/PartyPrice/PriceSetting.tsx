import { Box, Button, Typography, TextField, InputAdornment } from '@mui/material';
import { useDispatch } from 'react-redux';
import { FormEvent, useRef, useCallback } from 'react';
import { updateTotalPrice } from '../../../slices/totalPricesSettingSlice';

type Props = {
  handleClose: () => void,
  totalDrinkPrice: number,
  totalFoodPrice: number,
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
  "@media (max-width: 600px)": {
    width:300,
  },
  "& > :not(style)": { m: 2, width: "90%" },
};

const PriceSetting = ({handleClose, totalDrinkPrice, totalFoodPrice} : Props) => {
  
  const dispatch = useDispatch();
  const totalFoodPriceRef = useRef<HTMLInputElement>(null);
  const totalDrinkPriceRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const totalDrinkPrice = parseFloat(totalDrinkPriceRef.current?.value ?? "") || 0;
    const totalFoodPrice = parseFloat(totalFoodPriceRef.current?.value ?? "") || 0;
    dispatch(updateTotalPrice({ totalDrinkPrice, totalFoodPrice }));
    handleClose();
  }, [dispatch, handleClose]);

  return (
    <Box component="form" sx={boxStyle} onSubmit={handleSubmit}>
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
          inputProps: { min: 0 },
        }}
      />
      <TextField 
        label="Total Food Price" 
        type="number" 
        defaultValue={totalFoodPrice} 
        inputRef={totalFoodPriceRef}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            inputProps: { min: 0  },
          }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" color="success" type="submit" sx={{ width: "45%" }}>
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