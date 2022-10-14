import React from 'react';
import { Outlet } from 'react-router-dom';
import ButtonMenu from '../Globals/ButtonMenu';

const MenuContainer = () => {
  return (
    <>
      {/* <ButtonMenu /> */}
      <Outlet />
    </>
  );
};

export default MenuContainer;
