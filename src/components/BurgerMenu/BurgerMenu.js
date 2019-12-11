import React, {useState} from 'react';
import { slide as Menu } from 'react-burger-menu';
import './BurgerMenu.css';
   
const BurgerMenu = ({dhtClicked, analogClicked, isDhtSelected, isAnalogSelected}) => {

    return (
    <Menu width="150px">
      <p onClick={dhtClicked} style={isDhtSelected == true ? {color: 'red'} : null}>DHT11</p>
      <p onClick={analogClicked} style={isAnalogSelected == true ? {color: 'red'} : null}>Analog Input</p>
    </Menu>
    );
  }

export default BurgerMenu;
  