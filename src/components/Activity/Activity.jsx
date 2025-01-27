import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Activity.scss"; // Создайте этот файл для стилей

const Activity = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="activity">
      <div className="container">
        <div className="activity__wrapper">
          <div className="activity__wrapp" data-aos="fade-up">
            <h1>Деятельность компании</h1>
            <div className="activity__img">
              <img className="act_img_1" src="./activity-2.png" alt="" data-aos="fade-up" />
              <img className="act_img_2" src="./activity-1.png" alt="" data-aos="fade-up" />
            </div>
          </div>
          <div className="activity__text" data-aos="fade-up">
            <h2  data-aos="zoom-out-down">
              Модернизация, технологии, экология, человеческий капитал — все это
              приоритеты развития «Тольяттиазот»
            </h2>
            <p data-aos="zoom-out-down">
              Основной деятельностью ТОАЗа является выпуск минеральных удобрений
              и химической продукции. Сегодня завод включает в себя 7 агрегатов
              по производству аммиака и 2 агрегата карбамида, расположенных на
              более чем 200 га производственной площадки.
              <br />
              <br />
              С самого своего основания «Тольяттиазот» играл значимую роль в
              развитии химической отрасли страны, и в обеспечении благополучия
              родного города Тольятти и всей Самарской области. ТОАЗ входит в
              пятерку крупнейших налогоплательщиков региона, а так же
              обеспечивает работой более 5000 горожан.
              <br />
              <br />
              Помимо Российской Федерации, наши заказчики расположены в десятках
              стран на 5 континентах. Мощности ТОАЗ позволяют обеспечить около
              20% спроса на российском рынке и 11% объема мирового экспорта
              аммиака.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;