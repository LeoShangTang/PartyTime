import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

type Props = {
    handleOpen: () => void;
  };

const NewButton = ({handleOpen} : Props) => {
    return (
      <Button variant="contained" color="success" onClick={handleOpen}>
        <AddIcon sx={{color: "white"}}/>
      </Button>
    );
}

export default NewButton;

