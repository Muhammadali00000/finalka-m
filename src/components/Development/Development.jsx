import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Development.scss";

const Development = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="development">
      <div className="container">
        <div className="development__wrapper">
          <img src="./development.png" alt="" data-aos="fade-down" />
          <div className="development__content" data-aos="fade-down">
            <h1>Стратегия развития</h1>
            <p>
              Мы уделяем серьезное внимание безопасности и бесперебойности
              поставок. Развитая инфраструктура - собственный железнодорожный
              парк из более 1800 вагонов и доступ к аммиакопроводу
              «Тольятти-Одесса» протяженностью более 2400 км, - позволяют нам
              гарантировать соблюдение сроков доставки продукции клиентам.
            </p>
          </div>
          <div className="development__card" data-aos="fade-up">
            <div>
              <h1>1.</h1>
              <p>Производство аммиака: 2е место* в России, ТОП-10 в мире</p>
            </div>
            <div>
              <h1>2.</h1>
              <p>Производство карбамида: 5е место* в России</p>
            </div>
            <div>
              <h1>3.</h1>
              <p>
                Поставляем продукцию более, чем в 120 стран мира на 5
                континентах
              </p>
            </div>
            <div>
              <h1>4.</h1>
              <p>
                Мощности ТОАЗа позволяют обеспечить около 20% спроса на
                российском рынке и 11% объема мирового экспорта аммиака.{" "}
              </p>
            </div>
          </div>
          <div className="development__content2" data-aos="fade-up">
            <h1>Стратегические приоритеты ТОАЗа:</h1>
            <p>
              • Работники <br />
              Мы сохраняем традиционно высокие стандарты корпоративной
              политики. Тольяттиазот обеспечивает всех работников полисами
              ДМС, реализует жилищную программу, обеспечивает
              санаторно-курортное лечение и отдых сотрудников и их детей.
            </p>
            <p>
              • Окружающая среда Мы ответственно подходим к вопросам охраны
              окружающей среды и действуем в соответствии с нормами
              природоохранного законодательства. Забота о родном регионе имеет
              для ТОАЗа приоритетное значение. Наши собственные и
              государственные лаборатории постоянно контролируют соблюдение
              экологических норм на производстве и вокруг него.
            </p>
            <p>
              • Производство и развитие Мы сфокусированы на обеспечении
              долгосрочного устойчивого роста нашего бизнеса с помощью
              повышения операционной эффективности и взвешенного подхода к
              инвестициям в развитие. Тольяттиазот в своей работе применяет
              новейшие технологии и проводит комплексную модернизацию
              действующих производств.
            </p>
          </div>
          <div className="stats-grid">
            <h1>Стратегические цели Тольяттиазота – достижение максимальной эффективности бизнеса и укрепление лидерских позиций в отрасли за счет:</h1>
      <div className="stats-grid__item stats-grid__item--blue">
        <div className="stats-grid__icon"></div>
        <h2>▲40%</h2>
        <p>Роста выпуска аммиака за год. До 4,15 млн тонн.</p>
      </div>
      <div className="stats-grid__item stats-grid__item--green">
        <div className="stats-grid__icon"></div>
        <h2>В 2,5 РАЗА</h2>
        <p>Выпуск карбамида за год. До 2,53 млн тонн.</p>
      </div>
      <div className="stats-grid__item stats-grid__item--orange">
        <div className="stats-grid__icon"></div>
        <h2>В 3,5 РАЗА</h2>
        <p>Увеличения EBITDA за год.</p>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
