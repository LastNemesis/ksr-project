// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content"  name="header">
        
        <img src={process.env.PUBLIC_URL + '/assets/ksr-logo-sans-fond.png'} alt="Icon" className="icon" />
        
        <div className="text-container">
            <h1>KARATE SHOTOKAN RUNGIS</h1>
            <h2>L'Esprit d'évolution</h2>
        </div>

        <div className='menu-container'>
            <div className="menu-text">Menu</div>
            <MenuButton />
        </div>

      </div>

      <div className="body">
            {/* Your body content goes here */}
      </div>
    </div>
  );
};

export default HomePage;
