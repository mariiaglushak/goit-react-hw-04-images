import React, { useEffect, useState } from 'react';

import Searchbar from './Searchbar/Searchbar';
import { requestFetch } from 'Api/request';
import ImageGallery from './ImageGallery/ImageGallery';

import Button from './Button/Button';
import Loader from './Loader/Loader';

const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMoreWisible, setLoadMoreWisible] = useState(false);

  const handerFormSubmit = answer => {
    setPage(1);
    setQuery(answer);
    setImages([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    if (page === 1) {
      setIsLoading(true);
    }

    async function fetchMyAPI() {
      const dataFromSerwer = await requestFetch(query, page);
      try {
        const { data } = dataFromSerwer;

        setImages(prevImages => {
          if (prevImages) {
            return [...prevImages, ...data.hits];
          }
        });

        if (data.totalHits > 12) {
          setLoadMoreWisible(true);
        }

        if (data.hits.length === 0 && data.totalHits !== 0) {
          alert('фото закінчились');
          setLoadMoreWisible(false);
        }
        if (data.totalHits <= 12) {
          setLoadMoreWisible(false);
        }
        if (data.totalHits === 0) {
          setLoadMoreWisible(false);
          setIsLoading(false);
          alert('за вашим запитом нічого не знайдено');
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMyAPI();
  }, [page, query]);

  const handlerBtnLoadMore = () => {
    setPage(prevState => prevState + 1);
    setLoadMoreWisible(false);
  };

  return (
    <>
      <Searchbar handerSubmit={handerFormSubmit}></Searchbar>

      <ImageGallery arrayImages={images}></ImageGallery>
      {isLoading && <Loader />}
      {loadMoreWisible ? (
        <Button onClick={handlerBtnLoadMore} text="Load more"></Button>
      ) : null}
    </>
  );
};
export default App;
