import React from 'react';
import './Media.scss';
import aos from 'aos';
import 'aos/dist/aos.css';

const mediaData = [
  { id: 1, title: "Image 1", image: "media-1.png", alt: "Image 1 Description" },
  { id: 2, title: "Image 2", image: "media-2.png", alt: "Image 2 Description" },
  { id: 3, title: "Image 3", image: "media-3.png", alt: "Image 3 Description" },
  { id: 4, title: "Image 4", image: "media-4.png", alt: "Image 4 Description" },
  { id: 5, title: "Image 5", image: "media-5.png", alt: "Image 5 Description" },
  { id: 6, title: "Image 6", image: "media-6.png", alt: "Image 6 Description" },
  { id: 7, title: "Image 7", image: "media-7.png", alt: "Image 7 Description" },
  { id: 8, title: "Image 8", image: "media-8.png", alt: "Image 8 Description" },
];

const Media = () => {
  React.useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="media-section">
      <h2>Медиа</h2>
      <div className="media-grid">
        {mediaData.map((item) => (
          <div className={`media-item media-item-${item.id}`} key={item.id} data-aos="fade-up">
            <img src={item.image} alt={item.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Media;
