// HomePage.js
import React from 'react';
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
                <div className='main-intro'>
                    <div className='main-intro-image'></div>
                    <div className='main-intro-overlay'>
                        <div className='main-intro-title'>
                            KARATE SHOTOKAN RUNGIS
                        </div>
                        <div className='main-intro-body'>
                            <div className='main-intro-body-header'>
                                Pourquoi rejoindre notre club ?
                            </div>
                            Vous hésitez à pratiquer un art martial ou un sport de combat, pour vous et vos enfants ?<br/>
                            Nous vous enseignerons un karaté maîtrisé et perfectionné par des années d'expérience. <br/>
                            Le pratiquant bénéficiera d'une évolution personnelle et permanente.<br/><br/>
                            Débutant ou gradé, venez nous rejoindre ! (1 cours d'essai gratuit)
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <div className='main-news'>
                    <div className='main-news-image'></div>
                    <div className='main-news-overlay'>
                        <div className='main-news-body'>
                            <div className='main-news-body-header'>
                                Retrouvez l'actualité du club en cliquant ici !
                            </div>
                            Accessible dans la rubrique 'Actualités' du Menu.
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default HomePage;