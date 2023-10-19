import React from 'react';
import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ photos, onImageClick }) => {
  return (
    <ul className={css.imageList}>
      {photos.map(img => (
        <li key={img.id} className={css.imageItem}>
          <img
            className={css.image}
            src={img.webformatURL}
            alt={img.id}
            onClick={() => onImageClick(img.largeImageURL)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGalleryItem;
