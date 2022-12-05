import $ from 'jquery';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const Pad = (props) => {
  const bank = props.bank
  const colorArray = ['#1D8489', '#1D2789', '#701D89', '#891D46', '#89511D', '#65891D', '#1D8932']

  useEffect(
    () => {
      document.addEventListener('keydown', (e) => handleKeyPress(e.key.toUpperCase()));
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
      {bank.map((key) => 
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