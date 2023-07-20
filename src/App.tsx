import AllPersons from "./components/Person/AllPersons";
import { RootState } from "./store";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider, Box} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import Header from "./components/Header/Header";
import Title from "./components/Title";

function App() {

  const mode = useSelector((state: RootState) => {
    return state.themeToggler.mode;
  });

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          pt: 1,
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        <div style={{ flexDirection: "column", alignItems: "center", marginBottom: '60px' }}>
          <Title />
          <Header />
          <AllPersons />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
