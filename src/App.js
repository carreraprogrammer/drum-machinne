import ControlPanel from "./Components/ControlPanel";
import Pad from "./Components/Pad";
import './Saas/App.scss';
import drumKeys from './Resources/bankOne'
import { useState } from 'react';

const App = () => {
  const [bank, setBank] = useState(drumKeys)

  return (
    <div id="drum-machine">
        <ControlPanel setBank={setBank} bank={bank}/>
        <div id="padContainer">
          <Pad bank={bank} />
        </div>
       
    </div>
  )
}

export default App