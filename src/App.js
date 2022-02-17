import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { ReactlogoCollection } from './ui-components';
import ColorButton from './ColorButton'

function App() {
  const [color, setColor, logoColor] = useState('')
  return (
      <ReactlogoCollection />
      <div className={`react-root ${color}`}>
        <div className='centered'>
        <div id="a">
          <h1><img src={logo} className="App-logo" alt="logo"/></h1>
        </div>
          <div>
            <ColorButton color='red' setColor={setColor}/>
            <ColorButton color='orange' setColor={setColor}/>
            <ColorButton color='yellow' setColor={setColor}/>
          </div>

          <div>
            <ColorButton color='green' setColor={setColor}/>
            <ColorButton color='blue' setColor={setColor}/>
            <ColorButton color='indigo' setColor={setColor}/>
          </div>
          <ColorButton color='violet' setColor={setColor}/>
          <ColorButton color='black' setColor={setColor}/>
          <ColorButton color='white' setColor={setColor}/>
        </div>
      </div>
  );
}

export default App;
