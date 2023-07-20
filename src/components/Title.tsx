import {Box, Typography} from '@mui/material';
import logo from '../images/logo.png';

const Title = () => {
    return (
      <Box sx={{ width: "100%", maxWidth: 500, p: 1, mr: 1 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h3"
            sx={{ fontFamily: "Josefin Sans, Arial", pr: 3 }}
          >
            Party Calculator
          </Typography>
          <img src={logo} alt="Logo" style={{ width: 40, height: 40 }} />
        </div>
      </Box>
    );
}

export default Title;