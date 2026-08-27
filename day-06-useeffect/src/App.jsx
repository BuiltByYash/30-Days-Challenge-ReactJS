import CleanupEffect from "./CleanupEffect"
import DependencyEffect from "./DependencyEffect"
import EveryRender from "./EveryRender"
import MountOnly from "./MountOnly"

const App = () => {
  return (
    <div>
      <EveryRender/>
      <MountOnly/>
      <DependencyEffect/>
      <CleanupEffect/>
    </div>
  )
}

export default App
