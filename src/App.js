import ControlPanel from "./Components/ControlPanel";
import Pad from "./Components/Pad";
import './Saas/App.scss';
import drumKeys from './Resources/bankOne'
import drumKeysTwo from "./Resources/bankTwo";
import { useState } from 'react';

const App = () => {
  const [bank, setBank] = useState(drumKeys)

  return (
    <div id="drum-machine">
        <ControlPanel />
        <Pad bank={bank} />
    </div>
  )
}

export default App