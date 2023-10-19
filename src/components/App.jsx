import React, { useEffect, useState } from 'react';
import fetchImages from './api/Api';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';

export function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotal] = useState(0);
  const maxImg = 250;
  const imgPerPage = 10;

  useEffect(() => {
    if (!query) return;

    const fetchImageData = async () => {
      setLoading(true);
      try {
        const data = await fetchImages(query, page, imgPerPage);
        setPhotos(prevImages => [...prevImages, ...data.hits]);
        setTotal(data.totalHits);
      } catch (error) {
        console.error(`Error fetching images: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchImageData();
  }, [query, page]);

  const whenSubmit = newQuery => {
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  };

  const onLoadMore = () => {
    if (photos.length < maxImg) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const whenImageClick = url => {
    setSelectedImage(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  return (
    <>
      <Searchbar onSubmit={whenSubmit} />
      {loading && <Loader />}
      <ImageGalleryItem photos={photos} onImageClick={whenImageClick} />
      {photos.length < maxImg &&
        photos.length > 0 &&
        totalHits > photos.length && <Button onClick={onLoadMore} />}
      {showModal && (
        <Modal largeImageURL={selectedImage} onClose={closeModal} />
      )}
    </>
  );
}
