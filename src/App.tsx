import React, { useState, useEffect, useCallback, useRef } from 'react';

import Cards from './components/Cards/Cards';
import Search from './components/Search/Search';

import { constructPhotoImageUrl } from './utils';

import { Main, Title, ScrollToTop } from './GlobalStyles';
import FlickrApi from './api';

interface RawPhoto {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
}

export interface Photo {
  title: string;
  photoUrl: string;
}

const App = () => {
  const scrollToTopRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const [collectionData, setCollectionData] = useState<Photo[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentQuery, setCurrentQuery] = useState<string>('intel');

  const getPhotoImageUrls = (photos: RawPhoto[] = []) => {
    const Collection: Photo[] = photos.map((photo) => {
      const { id, server, secret, title } = photo;

      return {
        title,
        photoUrl: constructPhotoImageUrl(id, server, secret),
      };
    });

    setCollectionData((collectionData) => [...collectionData, ...Collection]);
  };

  const handleFetch = useCallback(async (params?: Record<string, string>) => {
    await FlickrApi.fetchPhotos(params)
      .then((photos) => getPhotoImageUrls(photos))
      .catch((error) => console.log(error));
  }, []);

  const handleScrollToTop = () => {
    if (titleRef?.current) {
      titleRef.current.scrollTo(0, 0);
    }
  };

  const handleLoadMore = (entities: any) => {
    const target = entities[0];

    if (target.isIntersecting) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  const handleSearch = (queryString: string) => {
    setCurrentQuery(queryString);
  };

  useEffect(() => {
    handleFetch({ page: `${currentPage}`, text: currentQuery });

    // eslint-disable-next-line
  }, [currentPage, currentQuery]);

  // useEffect(() => {
  //   const element = scrollToTopRef?.current;
  //   const observer = new IntersectionObserver(handleLoadMore, {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 1.0,
  //   });

  //   if (element) {
  //     observer.observe(element);
  //   }

  //   return () => {
  //     if (element) {
  //       observer.unobserve(element);
  //     }
  //   };
  // }, []);

  return (
    <Main>
      <Title ref={titleRef}>Intel assignment</Title>

      <Search onSearch={handleSearch} />
      <Cards collection={collectionData} />

      <ScrollToTop ref={scrollToTopRef} onClick={handleScrollToTop}>
        Scroll to top
      </ScrollToTop>
    </Main>
  );
};

export default App;
