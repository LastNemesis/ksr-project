// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
// STYLE
import './style/HomePage.css';
// PAGES/COMPONENTS
import Header from '../components/Header';
import Footer from '../components/Footer';

// MAIN
const HomePage = () => {
    return (
        <div className="home-page">
            <Header currentPage="Accueil"/>
            
            <main>
                
            </main>

            <Footer/>
        </div>
    );
};

export default HomePage;
