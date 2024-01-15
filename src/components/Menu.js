// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ closeMenu }) => {
  return (
    <div className="menu" onClick={(e) => e.stopPropagation()}>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/news">Actualités</Link>
        </li>
        <li>
          <Link to="/activities">Activités</Link>
        </li>
        <li>
          <Link to="/inscriptions">Inscriptions</Link>
        </li>
        <li>
          <Link to="/courses_timetables">Horaires des cours</Link>
        </li>
        <li>
          <Link to="/head_office">Le Bureau</Link>
        </li>
        <li>
          <Link to="/teachers">Les Professeurs</Link>
        </li>
        <li>
          <Link to="/contact_us">Nous contacter</Link>
        </li>
        <li>
          <Link to="/regulations">Règlement intérieur</Link>
        </li>
        <li>
          <Link to="/links">D'autres liens</Link>
        </li>
      </ul>
      <button onClick={closeMenu}>Close</button>
    </div>
  );
};

export default Menu;
