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
      <Box component="form" sx={{"& > :not(style)": { m: 2, width: "90%" }}} onSubmit={handleSubmit}>
        <Typography variant="h6" component="h2" sx={{ fontWeight: "bold", textAlign: "center" }}>
          Settings
        </Typography>
        <Box sx={{ flexDirection: "row" }}>
          <FormLabel sx={{ ml: "2%", pr: "40.53%" }}>Change Theme</FormLabel>
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