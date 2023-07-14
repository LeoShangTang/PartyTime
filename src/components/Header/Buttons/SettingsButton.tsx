import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';

type Props = {
    handleOpen: () => void;
  };

const SettingsButton = ({handleOpen} : Props) => {
    return (
      <Button variant="contained" onClick={handleOpen}>
        <SettingsIcon sx={{color: "white"}}/>
      </Button>
    );
}

export default SettingsButton;

