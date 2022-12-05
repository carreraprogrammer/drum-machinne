import drumKeysTwo from "../Resources/bankTwo";
import drumKeys from "../Resources/bankOne";

const ControlPanel = (props) => {
    const setBank = props.setBank;
    const bank = props.bank;

    const handleBank = (sounds) => {
      if(sounds === drumKeysTwo) {
        return setBank(drumKeys)
      } else if(sounds === drumKeys){
        return setBank(drumKeysTwo)
      }
    }
    return (
    <div id='controlPanel'>
        <h3 id='bankTitle'>You are playing with {bank === drumKeys ? 'BANK ONE' : 'BANK TWO'}</h3>
        <button id="changeBank" onClick = {() => handleBank(bank)}>Change sounds</button>
    </div>
    )
}

export default ControlPanel