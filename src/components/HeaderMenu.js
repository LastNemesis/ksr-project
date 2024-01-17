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
        
            <NavigationItem to="/" message="Accueil" selected={currentPage === 'Accueil'}/>
        
            <NavigationItem to="/actualites" message="Actualités" selected={currentPage === 'Actualités'}/>
        
            <NavigationItem to="/activites" message="Activités" selected={currentPage === 'Actualités'}/>
        
            <NavigationItem to="/inscriptions" message="Inscriptions" selected={currentPage === 'Actualités'}/>
        
            <NavigationItem to="/horaires" message="Horaires des cours" selected={currentPage === 'Actualités'}/>
        
            <NavigationItem to="/bureau" message="Le Bureau" selected={currentPage === 'Actualités'}/>
        
            <NavigationItem to="/professeurs" message="Les Professeurs" selected={currentPage === 'Actualités'}/>
                
            <NavigationItem to="/contacts" message="Nous contacter" selected={currentPage === 'Actualités'}/>
                
            <NavigationItem to="/reglement" message="Règlement intérieur" selected={currentPage === 'Actualités'}/>
                
            <NavigationItem to="/liens" message="Liens" selected={currentPage === 'Actualités'}/>
        
            </ul>
            <button onClick={closeMenu}>Close</button>
        </div>
    );
};

export default Menu;
