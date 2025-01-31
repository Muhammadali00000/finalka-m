import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import './Social.scss';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from './data.json'; // Assuming data.json is in the same directory

const Social = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrow:false
  };

  return (
    <div className="social-responsibility-container">
      <h2>Социальная ответственность</h2>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} data-aos="fade-up" className="slide">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Social;