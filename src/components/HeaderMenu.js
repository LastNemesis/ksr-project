// HeaderMenu.js
// -- IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';

// Navigation Item
const NavigationItem = ({ to, message, selected }) => {
    const className = selected ? 'bold-link' : '';
  
    return (
      <li>
        <Link to={to} className={className}>
          {message}
        </Link>
      </li>
    );
};


// MAIN
const Menu = ({ closeMenu, currentPage}) => {
    return (
        <div className="menu">
            <ul>
                <li>
                    <NavigationItem to="/" message="Accueil" selected={currentPage === 'Accueil'}/>
                </li>
                <li>
                    <NavigationItem to="/news" message="Actualités" selected={currentPage === 'Actualités'}/>
                </li>
                <li>
                    <NavigationItem to="/activities" message="Activités" selected={currentPage === 'Actualités'}/>
                </li>
                <li>
                    <NavigationItem to="/registration" message="Inscriptions" selected={currentPage === 'Actualités'}/>
                </li>
                <li>
                    <NavigationItem to="/schedules" message="Horaires des cours" selected={currentPage === 'Actualités'}/>
                </li>
                <li>
                    <NavigationItem to="/headOffice" message="Le Bureau" selected={currentPage === 'Actualités'}/>
                </li>
                <li>
                    <NavigationItem to="/teachers" message="Les Professeurs" selected={currentPage === 'Actualités'}/>
                </li>
                <li>
                    <NavigationItem to="/contact_us" message="Nous contacter" selected={currentPage === 'Actualités'}/>
                </li>
                <li>
                    <NavigationItem to="/regulations" message="Règlement intérieur" selected={currentPage === 'Actualités'}/>
                </li>
                <li>
                    <NavigationItem to="/links" message="Liens" selected={currentPage === 'Actualités'}/>
                </li>
            </ul>
            <button onClick={closeMenu}>Close</button>
        </div>
    );
};

export default Menu;
