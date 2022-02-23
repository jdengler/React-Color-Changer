import React from 'react'
import {Button} from '@aws-amplify/ui-react';

function ColorChangeButton (props) {
  return (

    <Button size="large" isFullWidth={true} variation={props.color} onClick={() => props.setColor(props.color)}>
      {props.color}
    </Button>
  )
}

export default ColorChangeButton
