import { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavBar />
      <br /><br />
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;