import ThemeSwitch from "./ThemeSwitch"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { toggleTheme } from "../../../../slices/themeModeSlice";

const ThemeChanger = () => {
    const dispatch = useDispatch();
    const handleToggleTheme = () => dispatch(toggleTheme());

    const mode = useSelector((state: RootState) => {
        return state.themeToggler.mode;
      });

    const isSwitched = () => {
      if (mode === "dark") {
        return true;
      }
      return false;
    }  

    return (
      <ThemeSwitch checked={isSwitched()} onClick={handleToggleTheme} />
    );
}

export default ThemeChanger;