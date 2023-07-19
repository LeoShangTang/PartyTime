import AllPersons from "./components/Person/AllPersons";
import { RootState } from "./store";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider, Box} from "@mui/material";
import './App.css'
import Header from "./components/Header/Header";

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
      <Box sx={{ height: "100vh", width: "100vw", backgroundColor: "background.default" }}>
        <Header />
        <AllPersons />
      </Box>
    </ThemeProvider>
  );
}

export default App;
