import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.scss";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Данные для слайдов
  const slides = [
    {
      id: 1,
      title: "Экология — наш главный",
      subtitle: "Приоритет",
      description:
        "ПАО «Тольяттиазот» является одним из крупнейших предприятий в химической промышленности России. Признанный лидер отрасли в стране и за рубежом.",
      image: "/hero-1.png", // Замените на свой URL
    },
    {
      id: 2,
      title: "Мы заботимся о будущем",
      subtitle: "Экология",
      description:
        "Наши технологии направлены на снижение выбросов и сохранение природы для будущих поколений.",
      image: "hero-2.png", // Замените на свой URL
    },
    {
      id: 3,
      title: "Инновации в производстве",
      subtitle: "Качество",
      description:
        "Мы внедряем современные технологии для улучшения качества продукции и безопасности производства.",
      image: "hero-3.jpg", // Замените на свой URL
    },
  ];

  // Управление текущим слайдом
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="section">
      <div className="container">
        <div className="hero__wrapper">

        <div className="content" data-aos="fade-right">
          <h1>
            {slides[currentSlide].title} <span>{slides[currentSlide].subtitle}</span>
          </h1>
        </div>
        <div className="image-container" data-aos="fade-left">
          <p>{slides[currentSlide].description}</p>
          <img src={slides[currentSlide].image} alt="Тольяттиазот" data-aos="zoom-in" />
        </div>
        <div className="navigation">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={index === currentSlide ? "active" : ""}
              >
              {index + 1}
            </button>
          ))}
          <button onClick={handlePrev}>Предыдущий</button>
          <button onClick={handleNext}>Следующий</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;