import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div>
      <NavLink
        to="/home"
        style={({ isActive }) =>
          isActive ? { textDecoration: 'underline' } : {}
        }
      >
        Home
      </NavLink>{' '}
      <span>|</span>
      <NavLink
        to="/notes"
        style={({ isActive }) =>
          isActive ? { textDecoration: 'underline' } : {}
        }
      >
        Notes List
      </NavLink>
    </div>
  );
};
export default NavigationBar;
