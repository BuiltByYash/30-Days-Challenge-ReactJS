import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <h2>Navbar</h2>
      <p>Current Theme: {theme}</p>

      <button onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default NavBar;