import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Длительность анимации
            once: true,     // Анимация проигрывается только один раз
        });
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="logo" data-aos="fade-down" data-aos-delay="200">
                <Link to={"/"}>
                    <img src="/header-logo.png" alt="" />
                </Link>
            </div>
            <div
                className={`burger ${menuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <div className="link">
                    <Link to={"/about"} onClick={closeMenu} data-aos="fade-down" data-aos-delay="300">О компании</Link>
                    <Link to={"/devel"} onClick={closeMenu} data-aos="fade-down" data-aos-delay="400">Развития</Link>
                    <Link to={"/structure"} onClick={closeMenu} data-aos="fade-down" data-aos-delay="500">Управления</Link>
                    <Link to={"/contact"} onClick={closeMenu} data-aos="fade-down" data-aos-delay="600">Контакт</Link>
                    <Link to={"/excursion"} onClick={closeMenu} data-aos="fade-down" data-aos-delay="700">Экскурсия</Link>
                    {/* <Link to={"/gallery"} onClick={closeMenu} data-aos="fade-down" data-aos-delay="800">Фотогалерея</Link> */}
                </div>
            </nav>
        </header>
    );
};

export default Header;
