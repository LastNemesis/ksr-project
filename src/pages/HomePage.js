// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaEnvelope, FaPhone } from 'react-icons/fa';
// STYLE
import './style/HomePage.css';
// PAGES/COMPONENTS
import Header from '../components/Header';
import Footer from '../components/Footer';
// IMAGES
import dojoIcon from '../assets/home-page-icon-dojo.png';
import certificateIcon from '../assets/home-page-icon-certificate.png';
// Links
const latitude = 48.75362365827044;
const longitude = 2.345564160297284;
const mapsLinkLatLong = `https://www.google.com/maps?q=${latitude},${longitude}`;
const mapsLinkAddress = `https://www.google.com/maps/dir//L%27espace+du+sport,+2+Rue+des+Halliers,+94150+Rungis/`;

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
                            KARATE SHOTOKAN <br/>RUNGIS
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
                                Retrouvez l'actualité du club en cliquant <span><Link to="/actualites">ici</Link></span> !
                            </div>
                            Accessible dans la rubrique 'Actualités' du Menu.
                        </div>
                    </div>
                </div>
                <div className='main-activities'>
                    <div className='main-activities-title'>
                        Nos Activités
                    </div>
                    <div className='main-activities-body'>
                        <div className='main-activities-body-part'>
                            <div className='main-activities-body-part-header'>
                                KARATE
                            </div>
                            <div className='main-activities-body-part-content'>
                                <div className='main-activities-body-part-content-text'>
                                    Une pratique pour tous... <p><br/></p>Un sport complet, en toute sécurité
                                </div>
                                <div className='main-activities-body-part-content-days'>
                                    <p><span>Lundi</span> (à partir de 18H00)</p>
                                    <p><span>Mercredi</span> (à partir de 17H30)</p>
                                    <p><span>Vendredi</span> (à partir de 18H00)</p>
                                </div>
                                <div className='main-activities-body-part-content-min-age'>
                                    A partir de <span>4 ans</span>
                                </div>
                            </div>
                        </div>
                        <div className='main-activities-body-part'>
                            <div className='main-activities-body-part-header'>
                                BODY-KARATE
                            </div>
                            <div className='main-activities-body-part-content'>
                                <div className='main-activities-body-part-content-text'>
                                    Sport complet alliant des mouvements d'arts martiaux en musique
                                    <p><span>Sans contact</span>, ne nécessite aucune connaissance particulière en Karaté</p>
                                </div>
                                <div className='main-activities-body-part-content-days'>
                                    <p><span>Samedi</span> 10h00-11h15</p>
                                </div>
                                <div className='main-activities-body-part-content-min-age'>
                                    A partir de <span>12 ans</span>
                                </div>
                            </div>
                        </div>
                        <div className='main-activities-body-part-last'>
                            <div className='main-activities-body-part-header'>
                                RENFORCEMENT MUSCULAIRE
                            </div>
                            <div className='main-activities-body-part-content'>
                                <div className='main-activities-body-part-content-text'>
                                    Permet d'ameillorer sa condition physique générale ou de l'entretenir
                                    <p>Exercices simples et réalisables par tous (cardio, renforcement musculaire, gainage...)</p>
                                </div>
                                <div className='main-activities-body-part-content-days'>
                                    <p><span>Lundi</span> 19h30-20h15</p>
                                </div>
                                <div className='main-activities-body-part-content-min-age'>
                                    A partir de <span>14 ans</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-info'>
                    <div className='main-info-location'>
                        <img src={dojoIcon} alt="Icon"/>
                        <div className='main-info-location-address'>
                            <p><span>Dojo</span> - Espace du Sport</p>
                            <p>2 rue des Halliers</p>
                            <p>94150 Rungis, France</p>
                        </div>
                    </div>
                    <div className='main-info-map'>
                        <div className='main-info-map-image'></div>
                        <a href={mapsLinkLatLong} target="_blank"  rel="noopener noreferrer">
                            Afficher le lieu  sur Google Maps
                        </a>
                        <a href={mapsLinkAddress} target="_blank"  rel="noopener noreferrer">
                            Afficher sur l'itinéraire sur Google Maps
                        </a>
                    </div>
                    <div className='main-info-teachers'>
                        <div className='main-info-teachers-text'>
                            Enseignement dirigé <br/>par des professeurs <br/>diplomés d'état
                        </div>
                        <img src={certificateIcon} alt="Icon"/>
                    </div>
                </div>
                <div className='main-contact'>
                    <div className='main-contact-header'>
                        Pour tous renseignements:
                    </div>
                    <div className='main-contact-body'>
                        <p>
                            <span><FaGlobe className='main-contact-body-icons'/> Website: </span> 
                            <br/><a href="http://www.karate-rungis.com/">http://www.karate-rungis.com/</a>
                        </p>
                        <p>
                            <span><FaEnvelope className='main-contact-body-icons'/> Email: </span>
                            <br/><a href="mailto:karaterungis@gmail.com">karaterungis@gmail.com</a>
                        </p>
                        <p>
                            <span><FaPhone className='main-contact-body-icons'/> Téléphone: </span><br/><a>06 60 68 93 00</a>
                        </p>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default HomePage;