import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Modern.scss";

const Modern = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const dataPoints = [
    {
      id: 1,
      x: "40%",
      y: "30%",
      title: "Объект 1",
      description:
      " Описание объекта 1 ",
    },
    {
      id: 2,
      x: "60%",
      y: "40%",
      title: "Объект 2",
      description: "Описание объекта 2",
    },
    {
      id: 3,
      x: "50%",
      y: "60%",
      title: "Третий агрегат карбамида",
      description:
        "Производственный комплекс 24 тонны в день 01 96% аптайм",
    },
  ];

  return (
    <div className="background">
        <h1>СОВРЕМЕННОЕ ПРЕДПРИЯТИЕ</h1>
      {dataPoints.map((point) => (
        <div
          key={point.id}
          className="data-point"
          style={{ left: point.x, top: point.y }}
          data-aos="zoom-in"
        >
          <div className="tooltip">
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
          <span className="plus-icon">+</span>
        </div>
      ))}
    </div>
  );
};

export default Modern;