import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { AmplifyProvider } from '@aws-amplify/ui-react'
//import '@aws-amplify/ui-react/styles.css'
import { Color } from './models';
import { Reactlogo } from './ui-components';
import { ReactlogoCollection } from './ui-components';
import ColorButton from './ColorButton'

import {Button, ButtonGroup, Card, Text, Heading, Flex, Badge, Image, StepperField, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './styles.css';

function rlogo() {
  return (
    <Reactlogo overrides={{"View.Icon[0]": {color:"Red"}}}/>
  );
}

function App() {
  const [color, setColor, logoColor] = useState('')
  return (
    <div className={`react-root ${color}`}>
      <div className='centered'>
        <AmplifyProvider>
          <h1>
            <Reactlogo className='App-logo' overrides={{"View.Icon[0]": {color:{setColor}}}}/>
          </h1>
          <h2>
            <ButtonGroup>
              <ColorButton color='red' setColor={setColor}/>
              <ColorButton color='orange' setColor={setColor}/>
              <ColorButton color='yellow' setColor={setColor}/>
            </ButtonGroup>

            <ButtonGroup>
              <ColorButton color='green' setColor={setColor}/>
              <ColorButton color='blue' setColor={setColor}/>
              <ColorButton color='indigo' setColor={setColor}/>
            </ButtonGroup>

            <ButtonGroup>
              <ColorButton color='violet' setColor={setColor}/>
              <ColorButton color='black' setColor={setColor}/>
              <ColorButton color='white' setColor={setColor}/>
            </ButtonGroup>
          </h2>
        </AmplifyProvider>
      </div>
    </div>
  );
}

export default App;
