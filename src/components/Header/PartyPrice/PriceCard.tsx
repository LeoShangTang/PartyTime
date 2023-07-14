import { Card, CardContent, CardActions, Grid, Typography, TextField, InputAdornment, IconButton, Modal } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import PriceSetting from "./PriceSetting";

const cardStyle = { display: 'flex', width: 300, height:70, flexDirection: "row", justifyContent: 'space-between', boxShadow: 2, borderRadius: 3, m:1, p:1 };

const PriceCard = () => {

    const [openPriceEditor, setOpenPriceEditor] = useState(false);
    const handleOpenPriceEditor = () => setOpenPriceEditor(true);
    const handleClosePriceEditor = () => setOpenPriceEditor(false);
  

    const prices = useSelector((state: RootState) => {
        return {
          totalDrinkPrice: state.totalPrice.totalDrinkPrice,
          totalFoodPrice: state.totalPrice.totalFoodPrice,
          totalPrice: state.totalPrice.totalFoodPrice + state.totalPrice.totalDrinkPrice
        };
    })

    return (
      <>
        <Card sx={cardStyle}>
          <CardContent sx={{ alignSelf: "center" }}>
            <TextField
              id="filled-number"
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
          <PriceSetting handleClose = {handleClosePriceEditor} totalDrinkPrice = {prices.totalDrinkPrice} totalFoodPrice = {prices.totalFoodPrice} />
        </Modal>

        {/* <Modal open={openEditForm} onClose={handleCloseEditForm}>
        <EditPerson person={person} handleClose={handleCloseEditForm} />
    </Modal> */}
      </>
    );
}

export default PriceCard