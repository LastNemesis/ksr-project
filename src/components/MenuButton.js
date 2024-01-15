// MenuButton.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Menu from './Menu';

const MenuButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuButtonClicked, setMenuButtonClicked] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMenuButtonClicked(true);
  };

  const closeMenu = () => {
    if (!menuButtonClicked) {
      setMenuOpen(false);
    }
    setMenuButtonClicked(false);
  };

  return (
    <div className="menu-button" onMouseEnter={() => setMenuOpen(true)} onMouseLeave={closeMenu}>
      <FaBars onClick={toggleMenu} />
      {menuOpen && <Menu closeMenu={closeMenu} />}
    </div>
  );
};

export default MenuButton;
