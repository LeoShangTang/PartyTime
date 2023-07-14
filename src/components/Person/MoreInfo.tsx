import {useState} from 'react';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Box, TextField, MenuItem, IconButton } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import foodDrinkDropMenu from "../../utils/FoodDrink/DropMenu";
import EditPerson from './UpdatePerson';
import PersonType from '../../utils/Types/PersonType';

type Props = {
  person: PersonType,
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

const MoreInfo = ({person} : Props) => {
  const [openMoreInfo, setOpenMoreInfo] = useState(false);
  const handleOpenMoreInfo = () => setOpenMoreInfo(true);
  const handleCloseMoreInfo = () => setOpenMoreInfo(false);

  const [openEditForm, setOpenEditForm] = useState(false);
  const handleOpenEditForm = () => setOpenEditForm(true);
  const handleCloseEditForm = () => {setOpenEditForm(false); setOpenMoreInfo(false)};

  return (
    <>
      <IconButton onClick={handleOpenMoreInfo}>
        <OpenInNewIcon />
      </IconButton>
      <Modal open={openMoreInfo} onClose={handleCloseMoreInfo}>
        <Box sx={style}>
          <TextField
            required
            disabled
            label="Name"
            defaultValue={person.name}
            variant="standard"
          />
          <TextField
            required
            disabled
            label="Contact"
            defaultValue={person.contact}
            variant="standard"
          />
          <TextField
            required
            disabled
            select
            label="Drinks"
            defaultValue={person.drinks}
            variant="standard"
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
            select
            label="Food"
            defaultValue={person.food}
            variant="standard"
          >
            {foodDrinkDropMenu.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              sx={{ width: "45%" }}
              onClick={handleOpenEditForm}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              sx={{ width: "45%" }}
              onClick={handleCloseMoreInfo}
            >
              Ok
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal open={openEditForm} onClose={handleCloseEditForm}>
        <EditPerson person={person} handleClose={handleCloseEditForm} />
      </Modal>
    </>
  );
}


export default MoreInfo;