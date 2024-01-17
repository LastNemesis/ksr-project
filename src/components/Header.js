// Header.js
import React from 'react';
// STYLE
import './style/Header.css';
// PAGES/COMPONENTS
import HeaderMenuButton from './HeaderMenuButton';

// MAIN
const Header = (args) => {
    return (
        <div className="header">
        
            <img src={process.env.PUBLIC_URL + '/assets/ksr-logo-sans-fond.png'} alt="Icon" className="icon" />
        
            <div className="text-container">
                <div className='title'>
                    <h1>KARATE SHOTOKAN RUNGIS</h1>
                    <h2>L'Esprit d'évolution</h2>
                </div>
                <div className="vertical-line"></div>
                <div className="current-page">{args.currentPage}</div>
            </div>
            
            <HeaderMenuButton currentPage={args.currentPage}/>

        </div>
    );
};
    
export default Header;