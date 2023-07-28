import {Box, Typography} from '@mui/material';
import logo from '../images/logo.png';


const fontSize = {
  fontFamily: "Josefin Sans, Arial",
  pr: 3,
  "@media (max-width: 600px)": {
    fontSize: "200%",
  },
};


const Title = () => {
    return (
      <Box sx={{ width: "100%", p: 1, mr: 1 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant='h3'
            sx={fontSize}
          >
            Party Calculator
          </Typography>
          <img src={logo} alt="Logo" style={{ width: 40, height: 40 }} />
        </div>
      </Box>
    );
}

export default Title;