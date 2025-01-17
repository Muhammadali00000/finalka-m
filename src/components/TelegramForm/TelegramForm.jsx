import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TelegramForm.scss'

function TelegramForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [thanksMessage, setThanksMessage] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = '7461316379:AAHUm_Af6nVSro9fnQ47UlSPCcPCOqR_IE0'; // Replace with your token
    const chat_id = '-4593074289'; // Replace with your chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const message = ` ${name}\ ${phone}`;

    const data = {
      chat_id: chat_id,
      text: message,
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          setThanksMessage('Скоро мы свами свяжимся');
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } else {
          alert('Error sending message.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error sending message.');
      });
  };


  

  return (
    <>
    <section className="excurs">
    <div className="form-container" data-aos="fade-up">
      <h1>чтобы заказать экскурсию оставьте нам свои данные</h1>
      <form onSubmit={handleSubmit} className="telegram-form">
        <label className="form-label">
          <input
          placeholder='Ваше имя'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            />
        </label>
        <br />
        <label className="form-label">
        <input
  type="text"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="form-input"
  placeholder="номер телефона"
/>

        </label>
        <br />
        <button type="submit" className="form-button">Submit</button>
        {thanksMessage && <p id="thanks" className="thanks-message">{thanksMessage}</p>}
      </form>
    </div>
          </section>
    </>
  );
}

export default TelegramForm;
