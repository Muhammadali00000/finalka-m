// src/components/Contacts.jsx
import React, { useState } from 'react';
import './Contact.scss'; // Импортируйте стили
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Иконки стрелок

const Contact = () => {
  const [isInfoOpen, setInfoOpen] = useState(false);
  const [isAddressOpen, setAddressOpen] = useState(false);
  const [isDepartmentsOpen, setDepartmentsOpen] = useState(false);
  const [isHROpen, setHROpen] = useState(false);
  const [isPressOpen, setPressOpen] = useState(false);

  return (
    <section className="contacts" data-aos="fade-up">
      <h2>Контакты</h2>

      <div className="contacts__section">
        <h3 onClick={() => setInfoOpen(!isInfoOpen)}>
          Справочные {isInfoOpen ? <FaChevronUp /> : <FaChevronDown />}
        </h3>
        {isInfoOpen && (
          <div className="contacts__info">
            <p>Телефон: (8482) 60-10-09</p>
            <p>Приемная: (8482) 60-11-52</p>
            <p>Email: <a href="mailto:zavod@tgaz.ru">zavod@tgaz.ru</a></p>
          </div>
        )}
      </div>

      <div className="contacts__section">
        <h3 onClick={() => setAddressOpen(!isAddressOpen)}>
          Адрес {isAddressOpen ? <FaChevronUp /> : <FaChevronDown />}
        </h3>
        {isAddressOpen && (
          <div className="contacts__address">
            <p>ПАО «ТГАЗ»</p>
            <p>445040, Самарская область, г. Тольятти, Поволжское шоссе, 32.</p>
          </div>
        )}
      </div>

      <div className="contacts__section">
        <h3 onClick={() => setDepartmentsOpen(!isDepartmentsOpen)}>
          Для покупателей {isDepartmentsOpen ? <FaChevronUp /> : <FaChevronDown />}
        </h3>
        {isDepartmentsOpen && (
          <div className="contacts__departments">
            <p>Отдел продаж на экспорт: (8482) 60-18-68</p>
            <p>Отдел продаж корпоративных заказов: (8482) 95-61-01</p>
          </div>
        )}
      </div>

      <div className="contacts__section">
        <h3 onClick={() => setHROpen(!isHROpen)}>
          HR-служба {isHROpen ? <FaChevronUp /> : <FaChevronDown />}
        </h3>
        {isHROpen && (
          <div className="contacts__hr">
            <p>Телефон: (8482) 60-11-67</p>
          </div>
        )}
      </div>

      <div className="contacts__section">
        <h3 onClick={() => setPressOpen(!isPressOpen)}>
          Пресс-служба {isPressOpen ? <FaChevronUp /> : <FaChevronDown />}
        </h3>
        {isPressOpen && (
          <div className="contacts__press">
            <p>Телефон: (8482) 60-18-68</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;