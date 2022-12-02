import $ from 'jquery';
import ReactDOM from 'react-dom';


const Pad = () => {
  const colorArray = ['#1D8489', '#1D2789', '#701D89', '#891D46', '#89511D', '#65891D', '#1D8932']
  
  const randomColor = (e) => {
    const color = colorArray[Math.floor(Math.random() * colorArray.length)]
    const color2 = colorArray[Math.floor(Math.random() * colorArray.length)]
    const key = e.target.id
    console.log(key)
    $(`#${key}`).css({
      border: `2px solid ${color}`,
      color: `${color2}`,
      fontWeight: 'bold'
    })
  }

  return (
    <div id="display">
            <button className="keyPad" id="Q" onMouseOver={randomColor}>Q</button>
            <button className="keyPad" id="W" onMouseOver={randomColor}>W</button>
            <button className="keyPad" id="E" onMouseOver={randomColor}>E</button>
            <button className="keyPad" id="A" onMouseOver={randomColor}>A</button>
            <button className="keyPad" id="S" onMouseOver={randomColor}>S</button>
            <button className="keyPad" id="D" onMouseOver={randomColor}>D</button>
            <button className="keyPad" id="Z" onMouseOver={randomColor}>Z</button>
            <button className="keyPad" id="X" onMouseOver={randomColor}>X</button>
            <button className="keyPad" id="C" onMouseOver={randomColor}>C</button>
    </div>
  )
}

export default Pad