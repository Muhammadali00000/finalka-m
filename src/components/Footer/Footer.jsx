// src/Footer.js
import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="section">
                    <h3>Компания</h3>
                    <ul>
                        <li>История компании</li>
                        <li>Стратегия развития</li>
                        <li>Устойчивое развитие</li>
                    </ul>
                </div>
                <div className="section">
                    <h3>Продукция</h3>
                    <ul>
                        <li>Картриджи</li>
                        <li>ККМ</li>
                    </ul>
                </div>
                <div className="section">
                    <h3>Пресс-центр</h3>
                    <ul>
                        <li>Новости</li>
                        <li>Пресс-релизы</li>
                    </ul>
                </div>
                <div className="section">
                    <h3>Контакты</h3>
                    <ul>
                        <li>Тел: +7 (495) 123-45-67</li>
                        <li>Эл. почта: info@company.ru</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 РАБОТА</p>
            </div>
        </footer>
    );
};

export default Footer;