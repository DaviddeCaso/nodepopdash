// src/components/Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/adverts" activeClassName="active">
            Anuncios
          </NavLink>
        </li>
        <li>
          <NavLink to="/adverts/new" activeClassName="active">
            Nuevo Anuncio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
