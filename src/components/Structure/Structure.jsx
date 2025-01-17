import React from "react";
import "./Structure.scss";

const Structure = () => {
  return (
    <>
      <section className="structure" data-aos="fade-up">
        <h2>Структура управления</h2>
        <div className="management-structure__container">
          <div className="management-structure__item">
            <img src="structure.png" alt="Петр Орджоникидзе" />
            <h3>Петр Орджоникидзе</h3>
            <p>Председатель совета директоров ПАО «ТГАЗ»</p>
            <p>
              Специалист в области публичного права, административной практики,
              связанной с международными организациями и государственными
              органами.
            </p>
          </div>

          <div className="management-structure__item">
            <img src="structure.png" alt="Петр Орджоникидзе" />
            <h3>Бейкер Кристофер Лумис</h3>
            <p>
              Специалист в области корпоративного права, слияний и поглощений,
              реструктуризации активов, имеющий более чем 35-летний опыт работы
              в различных юрисдикциях, в том числе в России и странах СНГ.
            </p>
          </div>

          <div className="management-structure__item">
            <img src="structure.png" alt="Петр Орджоникидзе" />
            <h3>Макаров Александр Владимирович</h3>

            <p>Экономист, специалист в области управления имуществом.</p>
          </div>

          <div className="management-structure__item">
            <img src="structure.png" alt="Петр Орджоникидзе" />
            <h3>Межеедов Дмитрий Евгеньевич</h3>

            <p>
              В 2019 – 2021 гг. – генеральный директор АО Корпорация
              «Тольяттиазот».
            </p>
          </div>

          <div className="management-structure__item">
            <img src="structure.png" alt="Петр Орджоникидзе" />
            <h3>Неплюев Николай Владимирович</h3>

            <p>
              Советник генерального директора по экономике и финансам, в 2015 г.
              присоединился к команде ЗАО Корпорация «Тольяттиазот» в должности
              заместителя генерального директора — директора по экономике и
              финансам.
            </p>
          </div>

          <div className="management-structure__item">
            <img src="structure.png" alt="Петр Орджоникидзе" />
            <h3>Сергей Шишов</h3>

            <p>Врио генерального директора АО Корпорация «Тольяттиазот»</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Structure;
