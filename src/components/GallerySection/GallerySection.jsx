import React, { useContext } from 'react';
import './GallerySection.scss';
import { PhotoContext } from '../../context';

const GallerySection = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__wrapper">
          {photos.map((photo) => (
            <div key={photo.id} className="gallery__item">
              <img src={photo.url} alt={photo.title} />
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
