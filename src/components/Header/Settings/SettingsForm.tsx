import { Box, Button, Typography, FormLabel } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { FormEvent, useRef, useCallback } from 'react';
import SettingTextField from './SettingsTextField';
import "./SettingsForm.css"
import ThemeChanger from './Theme/ThemeChanger';
import { updateFoodDrinkSetting } from '../../../slices/foodDrinkSettingSlice';
import { foodDrinkSettingsSelector } from '../../../slices/foodDrinkSettingSlice';

type Props = {
  handleClose: () => void,
}

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

const changeThemeLabelStyle = {
  ml: "2%",
  pr: "40.53%",
  "@media (max-width: 600px)": { pr: "15%" },
};


const SettingsForm = ({handleClose} : Props) => {

  const dispatch = useDispatch();
  const heavyRef = useRef<HTMLInputElement>(null);
  const mediumRef = useRef<HTMLInputElement>(null);
  const lightRef = useRef<HTMLInputElement>(null);
  const foodDrinkSettings = useSelector(foodDrinkSettingsSelector)

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const heavyPercent = heavyRef.current?.value || 0;
    const mediumPercent= mediumRef.current?.value || 0;
    const lightPercent = lightRef.current?.value || 0;
    dispatch(updateFoodDrinkSetting({heavyPercent, mediumPercent, lightPercent}));
    handleClose();
  }, [dispatch, handleClose]);

    return (
      <Box component="form" sx={boxStyle} onSubmit={handleSubmit}>
        <Typography variant="h6" component="h2" sx={{ fontWeight: "bold", textAlign: "center" }}>
          Settings
        </Typography>
        <Box sx={{ flexDirection: "row" }}>
          <FormLabel sx={changeThemeLabelStyle}>Change Theme</FormLabel>
          <ThemeChanger />
        </Box>
        <SettingTextField label="Heavy" inputRef={heavyRef} defaultValue={foodDrinkSettings.heavy}/>
        <SettingTextField label="Medium" inputRef={mediumRef} defaultValue={foodDrinkSettings.medium}/>
        <SettingTextField label="Light" inputRef={lightRef} defaultValue={foodDrinkSettings.light}/>
        <SettingTextField isDisabled label="None" defaultValue={0} />
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

export default SettingsForm; 