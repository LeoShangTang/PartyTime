import { useSelector } from "react-redux";
import { useState } from "react";
import { Card, CardContent, CardActions, TextField, InputAdornment, IconButton, Modal } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import PriceSetting from "./PriceSetting";
import { totalPriceSelector } from "../../../slices/totalPricesSettingSlice";

const cardStyle = {
  display: "flex",
  width: "60%", 
  height: 70,
  flexDirection: "row",
  justifyContent: "space-between",
  boxShadow: 2,
  borderRadius: 3,
  m: 1,
  p: 1,
  '@media (min-width: 500px)': {
    width: "60%", p: 1,
  },
};

// const cardStyle = {
  // '@media (min-width: 500px)': {
  //   width: "100%", borderRadius: "20px", p: 1, height: 540
  // },
  // '@media (max-width: 500px)': {
  //   width: "80%", borderRadius: "20px", p: 1, height: 400
  // },
// }

const PriceCard = () => {

    const [openPriceEditor, setOpenPriceEditor] = useState(false);
    const handleOpenPriceEditor = () => setOpenPriceEditor(true);
    const handleClosePriceEditor = () => setOpenPriceEditor(false);    
    const prices = useSelector(totalPriceSelector);

    return (
      <>
        <Card sx={cardStyle}>
          <CardContent sx={{ alignSelf: "center" }}>
            <TextField
              label="Total Price"
              type="number"
              size="small"
              value={prices.totalPrice}
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </CardContent>
          <CardActions sx={{ mr: 1 }}>
            <IconButton onClick={handleOpenPriceEditor}>
              <EditIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Modal open={openPriceEditor} onClose={handleClosePriceEditor}>
          <>
            <PriceSetting
              handleClose={handleClosePriceEditor}
              totalDrinkPrice={prices.totalDrinkPrice}
              totalFoodPrice={prices.totalFoodPrice}
            />
          </>
        </Modal>
      </>
    );
}

export default PriceCard