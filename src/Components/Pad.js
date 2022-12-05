import $ from 'jquery';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const drumKeys = [
  {
    key: 'Q',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    soundName: 'Heater1'
  },
  {
    key: 'W',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    soundName: 'Heater2'
  },
  {
    key: 'E',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    soundName: 'Heater3'
  },
  {
    key: 'A',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    soundName: 'Heater4'
  },
  {
    key: 'S',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    soundName: 'Clap'
  },
  {
    key: 'D',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    soundName: 'OpenH'
  },
  {
    key: 'Z',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    soundName: 'KiknH'
  },
  {
    key: 'X',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    soundName: 'Kik'
  },
  {
    key: 'C',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    soundName: 'ClosedHH'
  },
]


const Pad = () => {
  const colorArray = ['#1D8489', '#1D2789', '#701D89', '#891D46', '#89511D', '#65891D', '#1D8932']

  useEffect(
    () => {
      document.addEventListener('keydown', (e) => handleKeyPress(e.key));
    }, []
  )

  const randomColor = (e) => {
    const color = colorArray[Math.floor(Math.random() * colorArray.length)]
    const color2 = colorArray[Math.floor(Math.random() * colorArray.length)]
    const key = e.target.id
    $(`#${key}`).css({
      border: `2px solid ${color}`,
      color: `${color2}`,
      fontWeight: 'bold'
    })
  }

  const playSound =(id) =>{
    const sound = ReactDOM.findDOMNode(document.getElementById(id))
    return sound !== null ?  sound.play() : null
  }

  const handleKeyPress = (keyName) => {
    const color = colorArray[Math.floor(Math.random() * colorArray.length)]
    const key = document.getElementById(keyName)
    $(key).css({
      backgroundColor: `${color}`,
      color: 'white',
      fontWeight: 'bold',
      transition: 'all 0.2s ease-out',
      opacity: 0.8
    })
    setTimeout(() => {$(key).css({
      backgroundColor: 'white',
      color: 'black',
      opacity: 1
    })}, 300)
    return key !== null ? key.click() : null
  }

  return (
    <div id="display" onKeyPress={(e) => e.key === 'Q' ? console.log('this is a q') : null}>
      {drumKeys.map((key) => 
      (<button
        className="keyPad" 
        key={key.key}
        onMouseOver={randomColor}
        onClick = {() => playSound(key.soundName)}
        id = {key.key}
      >
          <audio src={key.sound} id={key.soundName}></audio>
          {key.key}
      </button>))}
    </div>
  )
}

export default Pad