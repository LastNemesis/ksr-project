// HeaderMenuButton.js
// -- IMPORTS
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
// -- PAGES/COMPONENTS
import Menu from './HeaderMenu';

// MAIN
const MenuButton = (args) => {
    // Setting variables
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuButtonClicked, setMenuButtonClicked] = useState(false);

    // Toogle Menu function
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Toggle Click function
    const toggleClick = () => {
        setMenuButtonClicked(!menuButtonClicked);
    };

    // Toggle Check
    const toggleAll = () => {
        toggleClick();
        if (!menuButtonClicked){
            openMenu();
        }else{
            closeMenuClick();
        }
    };

    // Open Menu Click function
    const openMenu = () => {
        setMenuOpen(true);
    };

    // Close Menu Click function
    const closeMenuClick = () => {
        setMenuOpen(false);
        toggleClick();
    };

    // Close Menu Hover function
    const closeMenuHover = () => {
        if(menuButtonClicked == false){
            setMenuOpen(false);
        }
    };

    // Return
    return (
        <div className='menu-container' onClick={toggleAll} onMouseEnter={openMenu} onMouseLeave={closeMenuHover}>
            <div className="menu-text">Menu</div>
            <div className="menu-icon">
                <FaBars />
                {menuOpen && <Menu closeMenu={closeMenuClick} currentPage={args.currentPage}/>}
            </div>
        </div>
    );
};

export default MenuButton;
