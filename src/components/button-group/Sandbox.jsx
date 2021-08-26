/* eslint-disable */
import React, { Fragment, useState } from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../button/Button';

const Sandbox = () => {
  const [ switchOn, setSwitchOn ] = useState(true);


  const handleSwitchOn = () => {
    setSwitchOn(true);
  };

  const handleSwitchOff = () => {
    setSwitchOn(false);
  };

  return (
    <Fragment>

      <h2><span>1. Horizontal button group:</span></h2>
      <ButtonGroup>
        <Button active>First</Button>
        <Button>Middle</Button>
        <Button>Last</Button>
      </ButtonGroup>

      <h2><span>2. Vertical button group:</span></h2>
      <ButtonGroup vertical>
        <Button>First</Button>
        <Button active>Middle</Button>
        <Button>Last</Button>
      </ButtonGroup>

      <h2><span>3. Switcher button group:</span></h2>
      <ButtonGroup>
        <Button onClick={ handleSwitchOn } active={ switchOn }>ON</Button>
        <Button onClick={ handleSwitchOff } active={ !switchOn }>OFF</Button>
      </ButtonGroup>

    </Fragment>
  );
}
  ;

export default Sandbox;

