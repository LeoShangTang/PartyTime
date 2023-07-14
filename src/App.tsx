import AllPersons from "./components/Person/AllPersons";
import { RootState } from "./store";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider} from "@mui/material";
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
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
      <CssBaseline />
      <Header/>
        <AllPersons />
    </ThemeProvider>
  );
}

export default App;
