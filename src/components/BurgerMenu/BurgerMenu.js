import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './BurgerMenu.css';
   
const BurgerMenu = ({changeDataType}) => {

    return (
    <Menu width="150px">
          <bmBurgerButton onClick={changeDataType}>DHT11</bmBurgerButton>
          <bmBurgerButton onClick={changeDataType}>Analog</bmBurgerButton>
    </Menu>
    );
  }

export default BurgerMenu;
  