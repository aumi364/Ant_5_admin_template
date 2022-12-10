import React from 'react';
import Logo from '../../assets/icons/logo';
import { NavLink } from 'react-router-dom';

const BrandLogo = () => {
  return (
    <NavLink to={'/dashboard'}>
      <Logo />
    </NavLink>
  );
};

export default BrandLogo;
