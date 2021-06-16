import React, { useState, useEffect } from 'react';

import Cards from './components/Cards/Cards';
import Search from './components/Search/Search';

import { constructPhotoImageUrl } from './utils';

import { Main, Title } from './GlobalStyles';
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
  const [collectionData, setCollectionData] = useState<Photo[]>([]);

  useEffect(() => {
    handleFetch();

    // eslint-disable-next-line
  }, []);

  const getPhotoImageUrls = (photos: RawPhoto[]) => {
    const Collection: Photo[] = photos.map((photo) => {
      const { id, server, secret, title } = photo;

      return {
        title,
        photoUrl: constructPhotoImageUrl(id, server, secret),
      };
    });

    setCollectionData(Collection);
  };

  const handleFetch = (queryString?: string) => {
    FlickrApi.fetchPhotos(queryString).then((photos) =>
      getPhotoImageUrls(photos)
    );
  };

  // const getusertest = () => {
  //   axios
  //     .get(
  //       `${REACT_APP_FLICKR_SEARCH_URL}&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&FLickrApi_sig=${process.env.REACT_APP_FLICKR_API_SIGNATURE}&user_id=193170265@N04`
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // };

  return (
    <Main>
      <Title>Intel assignment</Title>

      <Search onSearch={handleFetch} />
      <Cards collection={collectionData} />
    </Main>
  );
};

export default App;
