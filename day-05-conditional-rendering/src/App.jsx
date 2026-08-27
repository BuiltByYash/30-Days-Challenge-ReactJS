import LightTheme from "./LightTheme"
import Login_Logout from "./Login_Logout"
import ShowHidePass from "./ShowHidePass"

const App = () => {
  return (
    <div>
      <center>
      <h1>Conditional Rendering</h1>
      <Login_Logout/>
      <hr />
      <LightTheme/>
      <hr />
      <ShowHidePass/>
      </center>
    </div>
  )
}

export default App
