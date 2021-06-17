import { useState, useEffect, useCallback, useRef } from 'react';

import Cards from './components/Cards/Cards';
import Search from './components/Search/Search';

import { constructPhotoImageUrl } from './utils';

import { Main, Title, Bottom } from './GlobalStyles';
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
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const [collectionData, setCollectionData] = useState<Photo[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentQuery, setCurrentQuery] = useState<string>('intel');
  const [isFetching, setIsFetching] = useState<boolean>(false);

  /* Get all the photo image urls from fetched photos */
  const getPhotoImageUrls = (photos: RawPhoto[] = []) => {
    const Collection: Photo[] = photos.map((photo) => {
      const { id, server, secret, title } = photo;

      return {
        title,
        photoUrl: constructPhotoImageUrl(id, server, secret),
      };
    });

    setCollectionData([...collectionData, ...Collection]);
  };

  const handleFetch = useCallback(async (params?: Record<string, string>) => {
    setIsFetching(true);

    await FlickrApi.fetchPhotos(params)
      .then((photos) => {
        getPhotoImageUrls(photos);
        setIsFetching(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleLoadMore = (entities: any) => {
    const target = entities[0];

    if (target.isIntersecting) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleSearch = (queryString: string) => {
    // Clear previous search results
    setCollectionData([]);

    // Update new query
    setCurrentQuery(queryString);
  };

  useEffect(() => {
    handleFetch({ page: `${currentPage}`, text: currentQuery });

    // eslint-disable-next-line
  }, [currentPage, currentQuery]);

  useEffect(() => {
    // IntersectionObserver logic
    const element = bottomRef?.current;
    const observer = new IntersectionObserver(handleLoadMore, {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };

    // eslint-disable-next-line
  }, []);

  return (
    <Main>
      <Title>Intel assignment</Title>

      <Search onSearch={handleSearch} />

      <Cards collection={collectionData} />

      {isFetching ? <p>Loading images...</p> : null}

      <Bottom ref={bottomRef} />
    </Main>
  );
};

export default App;
