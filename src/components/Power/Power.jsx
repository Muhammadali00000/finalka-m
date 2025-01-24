import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Power.scss';

const Power = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
         <section className='power'>
      <div className="container">
        <div className="power__wrapper">
        <h1>МОЩНОСТИ</h1>   
      <div className="stats" data-aos="fade-up">
        <div className="stat-item">
          <h3>01</h3>
          <h1>960 000</h1>
          <p>тонн Карбамида в год</p>
        </div>
        <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
          <h3>02</h3>
          <h1>70 000</h1>
          <p>тонн Углекислоты в год</p>
        </div>
        <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
          <h3>03</h3>
          <h1>3 500 000</h1>
          <p>тонн Жидкого аммиака в год</p>
        </div>
      </div>
      <div className="image" data-aos="zoom-out-down">
        <img src="power-img.png" alt="Plant" />
      </div>
        </div>
    </div>
    </section>
  );
};

export default Power;
