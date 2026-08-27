import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Home</h2>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default Home;