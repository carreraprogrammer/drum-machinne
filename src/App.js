import ControlPanel from "./Components/ControlPanel";
import Pad from "./Components/Pad";
import './Saas/App.scss';

const App = () => {
  return (
    <div id="drum-machine">
        <ControlPanel />
        <Pad />
    </div>
  )
}

export default App