import React, { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal}>
        <img className={css.modalImg} src={largeImageURL} alt="Large" />
      </div>
    </div>
  );
};
export default Modal;
