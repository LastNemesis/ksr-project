// News.js
import React from 'react';
// STYLE
import './style/HomePage.css';
// PAGES/COMPONENTS
import Header from '../components/Header';
import Footer from '../components/Footer';

// MAIN
const News = () => {
    return (
        <div className="news-page">
            <Header currentPage="Actualités"/>
            <Footer/>
        </div>
        );
    };
    
    export default News;